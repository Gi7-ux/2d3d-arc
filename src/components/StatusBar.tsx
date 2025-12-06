"use client";

import { useStore } from "@/store/useStore";

const StatusBar = () => {
  const { tool } = useStore();

  return (
    <footer className="bg-gray-800 text-white p-2 text-sm flex justify-between">
      <div>
        <span>Tool: {tool}</span>
      </div>
      <div>
        <span>Scale: 1:100</span>
      </div>
      <div>
        <span>X: 0, Y: 0</span>
      </div>
    </footer>
  );
};

export default StatusBar;
