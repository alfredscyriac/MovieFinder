# MovieFinder

> A React-powered movie search platform with user-driven trending list. 

📍 **Live Site:** https://ascmoviefinder.vercel.app/ 

---

## 🗂 Table of Contents

- [Preview](#preview)
- [Tech Stack](#tech-stack)  
- [Installation & Usage](#installation--usage)  
- [Configuration](#configuration)   

---

## Preview 
<div>
    <a href="https://www.loom.com/share/13aff57db4c541a693b2df7f8065acfa">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/13aff57db4c541a693b2df7f8065acfa-fb13784075d5f6dc-full-play.gif">
    </a>
  </div>

---

## Tech Stack

| Layer           | Technology                          |
| --------------- | ----------------------------------- |
| Front-end       | React • JavaScript • Tailwind CSS   |
| Back-end        | Appwrite                            |
| API             | The Movie Database (TMDB)           |
| Hosting         | Vercel                              |

---

## Installation & Usage

1. Clone the repository to your local machine  
```bash 
git clone https://github.com/alfredscyriac/MovieFinder.git
cd MovieFinder
```
2. Install dependencies  
```bash
npm install
```
3. Create your `.env` file (see [Configuration](#configuration))  
4. Start the development server  
```bash 
npm run dev
```

---

## Configuration

Add a file named `.env` in the project root with the following values:
```bash
VITE_APP_TMDB_API_KEY=your_tmdb_api_key
VITE_APP_APPWRITE_PROJECT_ID=your_project_id
VITE_APP_APPWRITE_DATABASE_ID=your_database_id
VITE_APP_APPWRITE_COLLECTION_ID=your_collection_id
```
>**Make sure '.env' is listed in '.gitignore'


