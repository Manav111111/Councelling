from pathlib import Path
import joblib
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

MODEL_PATH = Path("model.joblib")


def fallback_cutoffs():
    return pd.DataFrame(
        [
            {"year": 2024, "college": "MAIT", "branch": "CSE", "category": "General", "round": 2, "openRank": 6200, "closeRank": 20500},
            {"year": 2024, "college": "MSIT", "branch": "IT", "category": "General", "round": 2, "openRank": 7900, "closeRank": 24800},
            {"year": 2024, "college": "USICT", "branch": "CSE", "category": "General", "round": 2, "openRank": 1100, "closeRank": 8500},
            {"year": 2024, "college": "BPIT", "branch": "ECE", "category": "OBC", "round": 3, "openRank": 26500, "closeRank": 59000},
        ]
    )


if MODEL_PATH.exists():
    bundle = joblib.load(MODEL_PATH)
    model = bundle["model"]
    cutoffs = bundle["cutoffs"]
else:
    model = None
    cutoffs = fallback_cutoffs()


@app.post("/api/predict")
def predict():
    payload = request.get_json(force=True)
    rank = int(payload.get("rank", 0))
    category = payload.get("category", "General")
    branches = payload.get("branch", payload.get("branches", []))
    if isinstance(branches, str):
        branches = [branches]
    round_num = int(payload.get("round", 2))

    candidates = cutoffs[(cutoffs["category"] == category) & (cutoffs["branch"].isin(branches)) & (cutoffs["round"] <= round_num)]
    predictions = []
    for _, row in candidates.iterrows():
        if model:
            features = pd.DataFrame(
                [{"rank": rank, "category": category, "branch": row["branch"], "round": round_num, "year": int(row["year"])}]
            )
            probability = float(model.predict_proba(features)[0][1])
        else:
            probability = max(0.12, min(0.96, 0.5 + (int(row["closeRank"]) - rank) / max(int(row["closeRank"]), 1)))
        confidence = "High" if probability > 0.74 else "Medium" if probability > 0.48 else "Low"
        predictions.append(
            {
                "college": row["college"],
                "branch": row["branch"],
                "lastCloseRank": int(row["closeRank"]),
                "probability": probability,
                "confidence": confidence,
            }
        )

    return jsonify({"predictions": sorted(predictions, key=lambda item: item["probability"], reverse=True)})


@app.get("/health")
def health():
    return jsonify({"status": "ok"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
