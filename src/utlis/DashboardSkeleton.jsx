// components/DashboardSkeleton.jsx
import React from "react";
import "./shimmer.css"; // 👈 for shimmer animation

export default function DashboardSkeleton() {
  return (
    <div className="p-6 animate-pulse">
      {/* Current Images */}
      <div className="shimmer h-40 w-full rounded-xl mb-6"></div>

      {/* Recent Cards + Payment Gateway */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="shimmer h-32 rounded-xl"></div>
        <div className="shimmer h-32 rounded-xl"></div>
        <div className="shimmer h-32 rounded-xl"></div>
        <div className="shimmer h-32 rounded-xl"></div>
        <div className="shimmer h-32 rounded-xl"></div>
        <div className="shimmer h-32 rounded-xl"></div>
      </div>
    </div>
  );
}
