"use client";

import { useRef } from "react";
import Image from "next/image";

interface FocalPoint {
  x: number;
  y: number;
}

interface FocalPointPickerProps {
  imageUrl: string;
  focalPoint: FocalPoint | undefined;
  onChange: (fp: FocalPoint) => void;
}

export default function FocalPointPicker({
  imageUrl,
  focalPoint,
  onChange,
}: FocalPointPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    onChange({
      x: Math.round(Math.max(0, Math.min(100, x))),
      y: Math.round(Math.max(0, Math.min(100, y))),
    });
  }

  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500">Kliknite na sliku da postavite fokusnu tačku</p>
      <div
        ref={containerRef}
        onClick={handleClick}
        className="relative w-full max-w-[500px] overflow-hidden rounded-lg border border-gray-200 cursor-crosshair select-none"
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={imageUrl}
          alt="Focal point picker"
          fill
          className="object-cover pointer-events-none"
          sizes="500px"
        />
        {focalPoint && (
          <div
            className="absolute w-5 h-5 rounded-full border-2 border-white shadow-lg bg-[#c0392b]/70 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              left: `${focalPoint.x}%`,
              top: `${focalPoint.y}%`,
            }}
          />
        )}
        {/* Crosshair overlay hint */}
        <div className="absolute inset-0 hover:bg-black/5 transition-colors pointer-events-none" />
      </div>
      <p className="text-xs text-gray-500 font-mono">
        {focalPoint
          ? `Fokusna tačka: X: ${focalPoint.x}% Y: ${focalPoint.y}%`
          : "Kliknite na sliku"}
      </p>
    </div>
  );
}
