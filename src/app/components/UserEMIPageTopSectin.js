"use client";

import { useState } from "react";
import EmiDashboard from "../userController/page";
import KycApproval from "../kycUsers/page";
import Header from "../components/Header";

export default function UserEMIPage() {
  const [activeTab, setActiveTab] = useState("emi");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <div className="flex">
        <button
          onClick={() => setActiveTab("emi")}
          className={`flex-1 text-center py-3 text-lg font-semibold border border-b-0 rounded-t-md transition-all duration-200
            ${
              activeTab === "emi"
                ? "bg-[#f2f8ff] text-[#014c9c]"
                : "bg-[#014c9c] text-white"
            }`}
        >
          User EMI Summary
        </button>

        <button
          onClick={() => setActiveTab("kyc")}
          className={`flex-1 text-center py-3 text-lg font-semibold border border-b-0 rounded-t-md transition-all duration-200
            ${
              activeTab === "kyc"
                ? "bg-[#f2f8ff] text-[#014c9c]"
                : "bg-[#014c9c] text-white"
            }`}
        >
          KYC Approval
        </button>
      </div>

      <div className="bg-white p-4 rounded-b-md shadow-md">
        {activeTab === "emi" ? <EmiDashboard /> : <KycApproval />}
      </div>
    </div>
  );
}
