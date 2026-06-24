export interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  category: "work" | "personal" | "creative" | "finance";
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  isPlaying: boolean;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}