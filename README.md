# ♊ Gemini Clone - AI Chat Application

A modern, responsive Gemini AI clone built with **React 19**, **Vite**, and **Tailwind CSS 4**. This application leverages the **Google Generative AI SDK** to provide a seamless chat experience similar to the official Gemini interface.

![Gemini Clone Preview](https://raw.githubusercontent.com/google/generative-ai-js/main/docs/images/gemini-logo.png)

## 🚀 Features

- **Real-time AI Chat**: Interact with Google's Gemini Pro model.
- **Dynamic Response Formatting**: Supports bold text and structured lists in AI responses.
- **Typing Animation**: Smooth word-by-word streaming effect for a natural feel.
- **Chat History**: Sidebar that tracks recent prompts for quick access.
- **Responsive Design**: Fully optimized for mobile and desktop using Tailwind CSS 4.
- **New Chat**: Easily reset the conversation state.
- **Dark Mode Aesthetic**: Sleek, modern UI inspired by the original Gemini interface.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **AI Integration**: [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai)
- **Icons**: (Assuming common icons like FontAwesome or Lucide are used, or custom SVG)
- **Deployment**: Vite-ready for Vercel/Netlify

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Minel03/Gemini-Clone.git
cd Gemini-Clone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add your Google Gemini API Key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```
> [!TIP]
> Get your API key from the [Google AI Studio](https://aistudio.google.com/).

### 4. Run the development server
```bash
npm run dev
```

## 📂 Project Structure

```text
src/
├── components/
│   ├── Main/        # Main chat interface and result display
│   └── Sidebar/     # Recent prompts and navigation
├── config/
│   └── gemini.js    # Google Generative AI configuration
├── context/
│   └── Context.jsx  # Global state management for chat logic
├── assets/          # Static images and icons
├── App.jsx          # Main application layout
└── main.jsx         # Entry point
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for new features or improvements, feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Minel](https://github.com/Minel03)
