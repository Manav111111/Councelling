# IPU Counselling Hub

A full-stack admissions counselling platform for GGSIPU/IPU aspirants. It includes rank prediction, college discovery, mentor profiles, counselling guide content, choice-list tooling, document checklist generation, Firebase Auth, Firestore-ready data, Firebase Storage paths, Cloud Messaging hooks, and a Flask/XGBoost ML service.

## Stack

- Next.js 14 App Router with TypeScript
- Tailwind CSS
- Firebase Auth, Firestore, Storage, Cloud Messaging
- Recharts for cutoff visualizations
- Cloudinary-hosted demo images
- Flask + XGBoost/scikit-learn prediction microservice

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

Fill these environment variables in `.env.local`:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
NEXT_PUBLIC_ML_API_URL=http://localhost:5000
NEXT_PUBLIC_GA_ID=
```

## Firebase

Deploy rules:

```bash
firebase deploy --only firestore:rules,storage
```

Seed sample content:

```bash
npm run seed
```

Firestore collections used:

- `users/{uid}`
- `colleges/{slug}`
- `mentors/{id}`
- `cutoffs/{id}`
- `blogPosts/{id}`
- `importantDates/{id}`
- `seatMatrix/{id}`
- `notifications/{id}`

Storage paths expected:

- `/mentors/{mentorId}/photo.jpg`
- `/colleges/{slug}/hero.jpg`
- `/colleges/{slug}/gallery/{n}.jpg`
- `/users/{uid}/avatar.jpg`

## ML Service

```bash
cd ml-service
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python train.py
python app.py
```

The API runs at `http://localhost:5000/api/predict`.

Docker:

```bash
docker build -t ipu-rank-api .
docker run -p 5000:5000 ipu-rank-api
```

Request shape:

```json
{
  "rank": 18000,
  "category": "General",
  "branch": ["CSE", "IT"],
  "round": 2
}
```

Response shape:

```json
{
  "predictions": [
    {
      "college": "MAIT",
      "branch": "CSE",
      "lastCloseRank": 20500,
      "probability": 0.72,
      "confidence": "Medium"
    }
  ]
}
```

## Admin Access

Admin writes are guarded by Firestore user profile role:

```json
{
  "role": "admin"
}
```

The UI includes `/admin`; production apps should set admin claims or role documents from a trusted backend, not from client-side code.

## Deployment

Vercel:

```bash
npm run build
vercel
```

Firebase Hosting:

```bash
firebase deploy --only hosting
```

For the ML service, deploy the Docker container to Cloud Run and set `NEXT_PUBLIC_ML_API_URL` to the Cloud Run URL.
