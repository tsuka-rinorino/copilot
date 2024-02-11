// headerとfooterを内包したページの作成
import React from "react";
import { Header } from "@/components/header"; // headerの読み込み

export const Sample: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Sample</h1>
    </div>
  );
};

