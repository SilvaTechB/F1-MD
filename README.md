
# ✦ F1-MD WhatsApp Bot ✦

A multi-functional WhatsApp bot built using the Baileys library. Developed and maintained by **Silva Tech Inc**.

---

## 🚀 Features

- ✅ Text-to-Speech (TTS)
- ✅ Sticker Maker
- ✅ Media Downloader (YouTube, TikTok, FB, etc.)
- ✅ Anti-Delete & Anti-Link
- ✅ Auto Bio / Auto Typing / Auto Voice / Auto Sticker
- ✅ AI Commands, Wikipedia Search, Quotes, Tools
- ✅ Admin & Group Management
- ✅ Custom Forward-Like Message Style
- ✅ 70+ Built-in Plugin Commands

---

## 🛠️ Installation

### 1. Clone the Bot

```bash
git clone https://github.com/your-username/f1-md.git
cd f1-md
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment

Create a `.env` or edit `config.env` file with:

```
SESSION_ID=Silva~<your_mega_file_id>
OWNER_NUMBER=254700143167
BOT_NAME=✦ F1 ✦ MD ✦
PUBLIC_MODE=true
```

> 🔐 `SESSION_ID` should be a MEGA.nz file ID where your session is hosted.

---

## ▶️ Run the Bot

```bash
npm start
```

Or use PM2:

```bash
pm2 start index.js --name f1-md
```

---

## 🧠 Commands Overview

Use the prefix `.` before any command:

| Command       | Description                     |
| ------------- | ------------------------------- |
| `.alive`      | Show bot is active              |
| `.tts`        | Convert text to voice           |
| `.sticker`    | Create sticker from image/video |
| `.yta`        | YouTube audio downloader        |
| `.wikipediax` | Search Wikipedia                |
| `.antidelete` | Resend deleted messages         |
| `.antilinks`  | Detect and remove group links   |

> ℹ️ All messages include WhatsApp-like **forwarded info** (`contextInfo`) for authenticity.

---

## 📁 Folder Structure

```
f1-md/
├── index.js
├── config.js
├── config.env
├── sessionLoader.js
├── sessions/
├── lib/
│   ├── handlers/
│   └── plugins/
├── media/
└── README.md
```

---

## ✨ Contribution

Feel free to fork, add your plugins, and pull-request your features!

---

## 🧑‍💻 Developed by

**Silva Tech Inc** – Making automation easier ⚡
[Contact](https://wa.me/254700143167)

---

## 📄 License

MIT License – Free for personal and educational use.
```
