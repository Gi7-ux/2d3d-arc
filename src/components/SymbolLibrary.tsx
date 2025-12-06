// src/components/SymbolLibrary.tsx
"use client";

import { useStore } from "@/store/useStore";
import Image from "next/image";

const symbols = [
  { name: "Chair", src: "/symbols/chair.svg" },
  { name: "Table", src: "/symbols/table.svg" },
];

const SymbolLibrary = () => {
  const { selectedSymbol, setSelectedSymbol } = useStore();

  return (
    <div className="p-2">
      <h3 className="font-bold mb-2 text-center">Symbols</h3>
      <div className="grid grid-cols-2 gap-2">
        {symbols.map((symbol) => (
          <button
            key={symbol.name}
            aria-label={symbol.name}
            className={`p-2 rounded-lg border-2 ${
              selectedSymbol === symbol.name
                ? "border-blue-500 bg-blue-200"
                : "border-gray-400 bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedSymbol(symbol.name)}
          >
            <Image
              src={symbol.src}
              alt={symbol.name}
              width={40}
              height={40}
              className="mx-auto"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SymbolLibrary;
