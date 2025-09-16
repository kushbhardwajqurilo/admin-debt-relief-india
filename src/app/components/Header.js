"use client";
import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { PiBellDuotone } from "react-icons/pi";

export default function Header() {
  const pathname = usePathname();
  const [adminImage, setProfile] = useState("");
  const router = useRouter();
  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "User Control", path: "/userController" },
    { name: "Services", path: "/advocateService" },
    {
      name: "Settings",
      path: "/Setting",
      icon: <FiSettings className="text-xl" />,
    },
  ];

  const handleAction = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  const [profileImage, setProfileImage] = useState({});
  // const profileDataFetch = async () => {
  //   const res = await fetch(`${API_BASE_URL}${ApiRute.adminProfileImage}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const contentType = res.headers.get("content-type");
  //   let resData;
  //   if (contentType && contentType.includes("application/json")) {
  //     resData = await res.json();
  //   } else {
  //     const text = await res.text();
  //     throw new Error(`Unexpected response: ${text}`);
  //   }
  //   if (res.ok && resData?.success) {
  //     setProfileImage(resData.data);
  //   } else {
  //   }
  // };
  useEffect(() => {
    // profileDataFetch();
    setProfile(window.location.origin);
  }, []);
  return (
    <header className="w-full flex items-center justify-between px-6 shadow bg-white">
      {/* Logo Section */}
      <div className="flex items-center ms-20">
        <Image src="/deptlogo.png" alt="Logo" height={200} width={250} />
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center space-x-4">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.path;

          return (
            <button
              key={idx}
              onClick={() => router.push(item.path)}
              className={`px-6 py-2 rounded-full border-2 border-[#ccc] flex flex-col items-center ${
                isActive
                  ? "bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-md"
                  : "bg-blue-100 text-black"
              }`}
            >
              <div className="flex items-center space-x-2">
                {item?.icon && item?.icon}
                <span>{item.name}</span>
              </div>
              {isActive && (
                <div className="h-1 w-full bg-gradient-to-r from-purple-400 to-cyan-300 mt-1 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <PiBellDuotone className="text-yellow-500 text-2xl bg-blue-100 rounded-full p-1" />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
        </div>
        <button
          onClick={handleAction}
          className="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full"
        >
          <FaPowerOff className="text-red-600 text-xl bg-blue-100 rounded-full p-2 h-10 w-10 cursor-pointer" />
        </button>
        <Link href="/profilePage" className="relative block h-10 w-10">
          <Image
            src="/favicon.ico"
            alt="User"
            className="rounded-full border-2 border-purple-500 object-cover"
            fill
            sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
          />
        </Link>
      </div>
    </header>
  );
}
