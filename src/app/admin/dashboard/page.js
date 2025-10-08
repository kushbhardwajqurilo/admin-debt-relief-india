"use client";

import CurrentImages from "@/app/components/CurrentImages";
import Header from "@/app/components/Header";
import HowDRIWorks from "@/app/components/HowDRIWorks";
import PaymentGateway from "@/app/components/PaymentGateway";
import RecentFeatures from "@/app/components/RecentFeatures";
import ServiceAndSubscription from "@/app/components/Service";
import Whatsapp from "@/app/components/Whatsaapp";
import DashboardSkeleton from "@/utlis/DashboardSkeleton";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [skeleton, setSkeleton] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setSkeleton(false);
    }, 1000);
    return () => clearTimeout(time);
  }, []);
  return (
    <>
      {skeleton ? (
        <DashboardSkeleton />
      ) : (
        <div className="bg-[#f5f8fe] ">
          <Header />

          <div className="min-h-screen p-4 w-[80%] mx-auto">
            <CurrentImages />

            <ServiceAndSubscription />
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <RecentFeatures />
              <PaymentGateway />
            </div>

            <div className=" w-[100%] flex justify-between">
              <HowDRIWorks />
              <Whatsapp />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
