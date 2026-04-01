# 🏥 SehatSaaf AI — Smart Healthcare Transparency Platform

**SehatSaaf AI** is an AI-powered healthcare assistant designed to bring **transparency, clarity, and trust** into medical billing and prescriptions.

It helps users:

* 🧾 Detect overcharges in hospital bills
* 💊 Understand prescriptions clearly
* 🔔 Get timely medicine reminders

> 🚀 Built as a hackathon-ready product using **AI + OCR + modern web technologies**

---

# 🌟 Key Features

## 🧾 AI Bill Analyzer

* Upload hospital bills (image/PDF)
* Extracts structured data using OCR
* Detects:

  * Overpriced medicines
  * Duplicate charges
  * Suspicious billing patterns
* Generates a **transparency score**

---

## 💊 Smart Prescription Assistant (NEW 🔥)

### 📄 Prescription Upload

* Upload handwritten or printed prescriptions
* AI extracts:

  * Medicine names
  * Dosage
  * Frequency (e.g., 2 times/day)
  * Instructions (before/after food)

---

### ⏰ Smart Medicine Scheduling

* Converts prescription into a **daily schedule**

Example:

```
Paracetamol → 10:00 AM, 8:00 PM  
Amoxicillin → 8:00 AM, 2:00 PM, 9:00 PM  
Vitamin D → 7:00 AM  
```

---

### 🔔 Real-Time Reminders

* Browser-based notifications
* Toggle ON/OFF reminders
* Alerts user exactly at medicine time

---

### ⚡ Live Highlight System

* Current medicine gets auto-highlighted
* Shows: **“Time to take this medicine”**
* Improves adherence & usability

---

### 🧠 AI Explanation

* Explains prescription in simple language
* Helps non-medical users understand instructions

---

## 📊 Interactive Dashboard

* Category-wise bill breakdown (Pie Chart)
* Suspicious charges highlighting
* Itemized bill table
* AI-generated explanation

---

## 🤖 AI Transparency Engine

* Converts raw data into human-readable insights
* Explains:

  * Spending patterns
  * Suspicious charges
  * Medicine usage

---

# 🧠 How It Works

```
      📄 Bill / Prescription
                │
                ▼
        🔍 OCR Extraction
        (Tesseract.js)
                │
                ▼
        🤖 AI Processing
     (LLM + Data Parsing)
                │
                ▼
   💡 Smart Analysis Engine
   - Price Comparison
   - Duplicate Detection
   - Schedule Generation
                │
                ▼
        📊 React Dashboard
   + 🔔 Smart Notifications
```

---

# 🛠 Tech Stack

## Frontend

* React (Vite)
* Tailwind CSS
* Recharts (Data Visualization)
* Framer Motion (Animations)

## Backend

* Node.js + Express
* Multer (File Uploads)
* Fuse.js (Fuzzy Matching)

## AI & OCR

* Tesseract OCR
* LLM for intelligent parsing & explanation

---

# 📂 Project Structure

```
SehatSaafAI
│
├── Frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── UI dashboard
│
├── Server
│   ├── controllers
│   ├── routes
│   ├── services
│   └── OCR + AI pipeline
│
└── README.md
```

---

# 🧪 Example Output

```
Total Bill Amount: ₹13,038  
Transparency Score: 90%

⚠ Suspicious Charges:
- Azithromycin overpriced  
- Ibuprofen higher than market price  

💡 AI Explanation:
Room charges dominate the bill.
Some medicines appear significantly overpriced.
```

---

# 🎯 Problem We Solve

Medical billing is often:

* Complex ❌
* Non-transparent ❌
* Hard to understand ❌

**SehatSaaf AI empowers patients to:**

* Understand bills clearly
* Detect overcharging
* Manage medicines effectively
* Build trust in healthcare systems

---

# 🏆 Why This Stands Out

* Combines **Bill Analysis + Prescription + Notifications**
* Real-world healthcare impact
* AI-powered insights + simple explanations
* Modern SaaS-style UI
* Works as a **complete healthcare assistant**

---

# 👨‍💻 Team

* **Nitin Kumar**
* **Samson**
* **Bhudev Bhanwar**

---

# 🚀 Future Scope

* 📱 Mobile App (PWA)
* 🔊 Voice-based reminders
* 📅 Calendar integration
* 📊 Health history tracking
* 🧠 Advanced AI insights

---

# 📜 License

This project is for educational and hackathon purposes.
