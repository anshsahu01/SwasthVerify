# 🌿 Swasth Verify

Swasth Verify is a full-stack web application that helps users identify harmful chemicals in products by analyzing the ingredient list from an image.

🔗 **Live Demo**: [https://swasth-verify.vercel.app/](https://swasth-verify.vercel.app/)  
📹 **Demo Video**: [Watch on YouTube](https://youtu.be/uvyGF9YVhX8)

---

## 📖 Description

Many consumer products—especially cosmetics and packaged foods—contain ingredients that are difficult to understand. **Swasth Verify** simplifies this by allowing users to scan product labels and instantly check for harmful chemicals.

---

## ⚙️ How It Works

1. **Image Upload**  
   Users upload an image of a product's ingredient list.

2. **OCR Extraction**  
   The app uses **Tesseract.js** for Optical Character Recognition (OCR) to extract text from the image.

3. **Chemical Analysis**  
   Extracted ingredients are compared with a MongoDB database containing harmful chemicals.

4. **Gemini API Integration**  
   - A chatbot powered by the **Gemini API** provides detailed information about each harmful chemical.
   - It suggests **safer alternatives** and explains potential **health risks**.
   - Stays strictly within the domain—no irrelevant or off-topic responses.

5. **PDF Report**  
   Users can **download a report** of the detected harmful chemicals using **jsPDF**.

---

## 🚀 Features

- 📸 Image upload functionality  
- 🔍 OCR-based text extraction  
- 🧪 Detection of harmful chemicals  
- 🧠 **Gemini chatbot** for insights & alternatives  
- 🧾 Downloadable PDF report with **jsPDF**  
- ⚡ Real-time chemical detection  
- 🧼 Clean and user-friendly interface  
- 🌐 Deployed online (Frontend + Backend)

---

## 🛠 Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Axios  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Other Tools & Libraries
- Tesseract.js (OCR)  
- jsPDF (PDF report generation)  
- Gemini API (Chemical info chatbot)  
- Git & GitHub (Version Control)

### Deployment
- Frontend: [Vercel](https://vercel.com)  
- Backend: [Render](https://render.com)



## 🧪 How to Run Locally

### Start Backend
```bash
cd server
npm install
node server.js
```


## 🖥️ Start Frontend
```bash
cd client
npm install
npm run dev
```

## 🔑 API Keys Required
To run this project locally, you’ll need the following:

MongoDB URI: Replace in your .env file for database connection.

Gemini API Key: Required to interact with Gemini for chemical info.

You can get it from Google AI Studio

Create a .env file in both the client and server directories as needed.

## 📈 Future Improvements
🔍 Barcode scanning for faster input

🛡️ Safety ratings for chemicals

👤 User login & ingredient scan history


## 📬 Contact
For suggestions, questions, or contributions, feel free to reach out:

📧 riteshkushwaha497@gmail.com
📧 anshsahu7705@gmail.com
