"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/assets/lotties/loading.json";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Lottie
        animationData={loadingAnimation}
        loop
        className="w-56"
      />
    </div>
  );
}