from pathlib import Path
import joblib
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from xgboost import XGBClassifier

DATA_PATH = Path("cutoffs.csv")
MODEL_PATH = Path("model.joblib")


def build_training_rows(df: pd.DataFrame) -> pd.DataFrame:
    rows = []
    for _, cutoff in df.iterrows():
        for delta in [-8000, -2500, -400, 0, 450, 1800, 6000]:
            candidate_rank = max(1, int(cutoff["closeRank"] + delta))
            rows.append(
                {
                    "rank": candidate_rank,
                    "category": cutoff["category"],
                    "branch": cutoff["branch"],
                    "round": cutoff["round"],
                    "year": cutoff["year"],
                    "label": int(candidate_rank <= cutoff["closeRank"] + 500),
                }
            )
    return pd.DataFrame(rows)


def main():
    if not DATA_PATH.exists():
        raise FileNotFoundError("Add cutoffs.csv with columns: year,college,branch,category,round,openRank,closeRank")

    cutoffs = pd.read_csv(DATA_PATH)
    training = build_training_rows(cutoffs)
    x = training[["rank", "category", "branch", "round", "year"]]
    y = training["label"]
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42, stratify=y)

    preprocessor = ColumnTransformer(
        [
            ("num", StandardScaler(), ["rank", "round", "year"]),
            ("cat", OneHotEncoder(handle_unknown="ignore"), ["category", "branch"]),
        ]
    )

    model = Pipeline(
        [
            ("preprocess", preprocessor),
            ("classifier", XGBClassifier(n_estimators=120, max_depth=4, learning_rate=0.08, eval_metric="logloss")),
        ]
    )

    model.fit(x_train, y_train)
    print(classification_report(y_test, model.predict(x_test)))
    joblib.dump({"model": model, "cutoffs": cutoffs}, MODEL_PATH)
    print(f"Saved {MODEL_PATH}")


if __name__ == "__main__":
    main()
