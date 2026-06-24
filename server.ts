import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { prompt, history } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        text: "Nova OS AI core is currently running in offline simulation mode."
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });
    res.json({ text: response.text });
  } catch (err) {
    res.status(500).json({ error: "Cognitive error" });
  }
});

async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0");
}
start();