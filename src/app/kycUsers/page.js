"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";

const kycUsers = [
  {
    id: "#001111",
    name: "Anupam Kumar",
    gender: "Male",
    image: "/user1.jpg",
    joiningDate: "01 July, 2025",
    phone: "+91 92134567",
    status: "Attached",
  },
  // Add more users
];

export default function KycApproval() {
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  return (
    <div className="p-4">
      <div className="p-4 w-full bg-white rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-blue-800">KYC Approval</h2>
        </div>

        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search By User ID"
            className="border px-4 py-2 rounded-md w-[300px]"
          />
          <div className="flex gap-2">
            <select
              className="border px-4 py-2 rounded-md"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Status</option>
              <option value="Attached">Attached</option>
              <option value="Pending">Pending</option>
            </select>
            <select
              className="border px-4 py-2 rounded-md"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">User ID</th>
              <th className="p-3">DRI User</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Joining Date</th>
              <th className="p-3">User Mob No.</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {kycUsers
              .filter(
                (user) =>
                  (!statusFilter || user.status === statusFilter) &&
                  (!genderFilter || user.gender === genderFilter),
              )
              .map((user, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-3">{user?.id}</td>
                  <td className="p-3 flex items-center gap-3">
                    <Image
                      src={user?.image}
                      alt={user?.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{user?.name}</div>
                      <div className="text-xs text-gray-500">
                        {user?.gender}
                      </div>
                    </div>
                  </td>
                  <td>{user?.gender}</td>
                  <td className="p-3">{user?.joiningDate}</td>
                  <td className="p-3">{user?.phone}</td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center gap-2 ${
                        user.status === "Attached"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          user.status === "Attached"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      ></span>
                      {user?.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full shadow">
                      Review & Assign
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
