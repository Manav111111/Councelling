# IPU Counselling Hub

A comprehensive full-stack admissions counselling and rank prediction platform built specifically for GGSIPU/IPU engineering aspirants. The platform offers rank prediction, college discovery, mentor profiles, counselling guides, choice-list tooling, and document checklist generation to help students navigate the admissions process.

## 🚀 Features

- **Advanced Rank Predictor:** Built-in machine learning service (Flask/XGBoost) and rule-based fallback to accurately predict college and branch placement based on historical cutoff data.
- **Comprehensive College Data:** Up-to-date cutoff and placement data for major IPU B.Tech colleges including ADGITM, HMR, USAR, BVCOE, GTBIT, and VIPS.
- **Mentor Connectivity:** Integrated mentor profiles with booking links to allow students to connect directly with experienced seniors.
- **Real-time Notifications:** Firebase Cloud Messaging hooks for real-time updates and important dates.
- **Community Support:** Footer integration with a dedicated WhatsApp community for real-time aspirant support.

## 💻 Tech Stack

- **Frontend:** Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend & Database:** Firebase (Auth, Firestore, Storage, Cloud Messaging)
- **Machine Learning Service:** Python, Flask, XGBoost, scikit-learn
- **Data Visualization:** Recharts for dynamic cutoff trend visualizations
- **Media Hosting:** Cloudinary (for demo images) & Firebase Storage

## 🛠️ Local Setup

### 1. Web Application

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run the development server
npm run dev
```

Open `http://localhost:3000` to view the application.

**Environment Variables (`.env.local`)**:
You will need to configure your Firebase and ML API credentials:
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

### 2. ML Prediction Service

```bash
cd ml-service
python -m venv .venv
# On Windows: .venv\Scripts\activate
# On Mac/Linux: source .venv/bin/activate
pip install -r requirements.txt
python train.py
python app.py
```

The API runs locally at `http://localhost:5000/api/predict`.

Alternatively, using Docker:
```bash
docker build -t ipu-rank-api .
docker run -p 5000:5000 ipu-rank-api
```

## 📦 Firebase Configuration

### Deploy Rules
```bash
firebase deploy --only firestore:rules,storage
```

### Seed Database
Populate the Firestore database with sample content:
```bash
npm run seed
```

**Firestore Collections:**
- `users/{uid}`
- `colleges/{slug}`
- `mentors/{id}`
- `cutoffs/{id}`
- `blogPosts/{id}`
- `importantDates/{id}`
- `seatMatrix/{id}`
- `notifications/{id}`

## 🔒 Admin Access

Admin capabilities are guarded by the Firestore user profile role. To grant admin access, update the user document in Firestore:
```json
{
  "role": "admin"
}
```
The admin dashboard is available at `/admin`.

## 🚀 Deployment

**Frontend (Vercel):**
```bash
npm run build
vercel
```

**ML Service (Google Cloud Run):**
Deploy the Docker container to Cloud Run and update the `NEXT_PUBLIC_ML_API_URL` environment variable in your Vercel project with the generated URL.
