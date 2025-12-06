import { create } from "zustand";

type Tool = "select" | "wall" | "door" | "window" | "symbol";

interface AppState {
  tool: Tool;
  setTool: (tool: Tool) => void;
  selectedSymbol: string | null;
  setSelectedSymbol: (symbol: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  tool: "select",
  setTool: (tool) => set({ tool, selectedSymbol: null }),
  selectedSymbol: null,
  setSelectedSymbol: (symbol) => set({ selectedSymbol: symbol, tool: "symbol" }),
}));
