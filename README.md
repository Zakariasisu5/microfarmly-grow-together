# 🌿 MicroFarmly – Grow Together, Eat Fresher

**MicroFarmly** is an AI-powered, hyperlocal farming and food subscription platform. It enables cafes, coworking spaces, and urban communities to install self-sustaining vertical farming kiosks, while users subscribe to fresh produce grown right next to them.

> 🌍 Live Project → [https://microfarmly-grow-together.vercel.app](https://microfarmly-grow-together.vercel.app)

---

## 🚀 Features

### 🌱 For Kiosk Operators (Admin Dashboard)
- Add and monitor farming kiosks in real-time
- View sensor data: temperature, humidity, moisture, and light
- AI-powered harvest prediction system
- Remote control lights and water pumps
- Alerts for abnormal sensor readings
- Manage crops and growth timelines

### 📦 For Consumers (Subscription App)
- Sign up and subscribe to fresh microgreens
- Choose pickup location from a kiosk map
- Get notified when produce is ready
- Scan QR code at kiosk to claim harvest
- Track subscription history and provide feedback

### 🧠 Backend & AI System
- Realtime sensor tracking using Supabase Realtime
- Python-based AI to predict harvest dates based on sensor patterns
- Edge functions for IoT communication and automation logic

---

## 🛠 Built With

| Layer            | Tech Stack                              |
|------------------|------------------------------------------|
| Frontend         | React.js, typescript , Next.js, Tailwind CSS          |
| Backend          | Supabase (Auth, Realtime DB, Storage)    |
| Hosting          | Vercel                                   |
| AI Integration   | Python (TensorFlow/Scikit-learn)         |
| Payments         | Stripe                                   |
| IoT Interface    | ESP32 (C++) + REST API via Edge Functions|

---

## 🧩 Project Structure

```bash
microfarmly/
│
├── components/         # Reusable React components
├── pages/              # Next.js pages and routing
├── styles/             # Tailwind & global styles
├── lib/                # Supabase client, helpers
├── public/             # Static assets
├── utils/              # Helper functions and constants
└── .env.example        # Sample environment config


---

🧪 How to Clone and Run Locally

> ⚠️ Requires Node.js (v18+), npm, and a Supabase account.



# 1. Clone the repository
git clone https://github.com/your-username/microfarmly.git
cd microfarmly

# 2. Install dependencies
npm install

# 3. Set up your environment variables
cp .env.example .env
# Fill in values from your Supabase project (URL, anon/public keys, Stripe keys, etc.)

# 4. Run the development server
npm run dev

Then open http://localhost:3000 in your browser.


---

⚙️ Supabase Setup Guide

1. Go to https://supabase.com and create a new project


2. Enable Auth and set up email provider


3. Create necessary tables:

users, kiosks, sensor_logs, subscriptions, pickups, etc.



4. Set RLS (Row Level Security) policies for tables


5. Add your API keys and Supabase project URL to .env




---

📸 Screenshots

Admin Dashboard	Consumer Subscription App

	



---

💡 Future Plans

Mobile app (React Native)

Predictive AI with weather integration

Loyalty rewards system

NFT-based harvest tracking (experimental)

Global partner dashboard



---

🧑‍💻 Author

Zakaria Sisu
Full Stack Engineer & Founder
📧 zakariasisu5@gmail.com
🔗 LinkedIn | GitHub


---

📄 License

MIT License – feel free to fork, use, and contribute!


---

🌟 If you like this project, consider giving it a star!

---
