# 🏥 SehatSaaf AI — Medical Bill Transparency Analyzer

**SehatSaaf AI** is an AI-powered system that analyzes hospital bills to detect suspicious charges, duplicate services, and overpriced medicines.
The goal is to help patients **understand their medical bills clearly and avoid overcharging**.

This project was built as a **hackathon solution** to improve transparency in healthcare billing.

---

# 🚀 Key Features

### 📄 Bill Upload & OCR

Users upload a hospital bill image or PDF.
The system uses **OCR (Optical Character Recognition)** to extract text from the document.

### 🤖 AI Bill Analysis

An AI model analyzes the extracted bill data and identifies:

* Itemized charges
* Total bill amount
* Categories of services

### 💊 Medicine Price Comparison

Detected medicines are compared with a **market price dataset** to find possible overpricing.

Example:

| Medicine           | Hospital Price | Market Price |
| ------------------ | -------------- | ------------ |
| Azithromycin 500mg | ₹450           | ₹75          |

### ⚠ Suspicious Charge Detection

The system highlights:

* Overpriced medicines
* Duplicate services
* Unusual bill distributions

### 📊 Bill Breakdown Dashboard

The frontend dashboard visualizes:

* Category breakdown (Room, Medicine, Lab Tests, etc.)
* Transparency score
* Suspicious alerts
* AI explanation of the bill

---

# 🧠 How It Works

```
Hospital Bill
      │
      ▼
 OCR Text Extraction
 (Tesseract.js)
      │
      ▼
 AI Bill Parsing
 (LLM Analysis)
      │
      ▼
 Bill Processing
 - Category Detection
 - Duplicate Detection
 - Price Comparison
      │
      ▼
 Transparency Score
 + Suspicious Charge Detection
      │
      ▼
 React Dashboard
```

---

# 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Recharts (data visualization)
* Framer Motion (animations)

### Backend

* Node.js
* Express.js
* Multer (file upload)
* Fuse.js (fuzzy medicine matching)

### AI & OCR

* Tesseract OCR
* LLM for bill extraction and analysis

---

# 📂 Project Structure

```
SehatSaafAI
│
├── Frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── dashboard UI
│
├── Server
│   ├── controllers
│   ├── services
│   ├── routes
│   └── OCR + AI analysis
│
└── README.md
```

---

# 🧪 Example Output

```
Total Bill Amount: ₹13,038

Transparency Score: 90%

Suspicious Charges:
- Azithromycin 500mg appears overpriced
- Ibuprofen 400mg significantly higher than market price

AI Explanation:
Room charges account for a significant portion of the bill.
Some medicines appear higher than typical market prices.
```

---

# 🎯 Problem This Solves

Hospital billing is often complex and difficult for patients to understand.
Many people unknowingly pay **overpriced or duplicate charges**.

**SehatSaaf AI helps patients:**

* Understand their bills clearly
* Detect suspicious charges
* Improve transparency in healthcare billing

---

# 🏆 Hackathon Impact

This project demonstrates how **AI + OCR + data analysis** can improve transparency in medical billing and empower patients with clear insights into their healthcare expenses.

---

# 👨‍💻 Team Member

**Nitin Kumar**
**Samson**

## 🌐 Live Demo

🔗 **Try SehatSaaf AI Here:**

[Open Web App](https://ai-biller-frontend-kumarnitin87654-5471s-projects.vercel.app)

---

# 📜 License

This project is for educational and hackathon purposes.



