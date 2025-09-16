"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Header from "../components/Header";
import EMIModal from "../components/EMIModal";
import UploadEMIModal from "../components/UploadEMIModal";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import ReviewAssignModal from "../components/ReviewAssignModal";
import LoanEMIForm from "../components/uploadManualEmiModal";
import UploadCSVModal from "../components/uploadUsersFromCSV";
import { toTitleCase } from "@/utlis/string";
import PayToDri from "../components/PaytoDri";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("emi");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [keycUsers, setKycUser] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("upload");
  const [show, setShow] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [emiUsers, setEmiUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPhone, setPhone] = useState(0);
  const [csvModalOpen, setCsvModalOpen] = useState(false);
  const [userid, setUseId] = useState("");

  const GetAllKycUser = async () => {
    const res = await fetch(`${API_BASE_URL}${ApiRute.kyc.get}`);
    const result = await res.json();
    setKycUser(result?.data || []);
  };

  async function getAllDriUers() {
    const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.getAll}`, {
      method: "GET",
    });
    const result = await res.json();
    if (result?.success) {
      setEmiUsers(result?.data || []);
    }
  }

  const openModal = (mode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  // manual emi open/close
  const handleShow = (data) => {
    setPhone(data?.phone);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    GetAllKycUser();
    getAllDriUers();
  }, []);

  const isEMI = activeTab === "emi";

  // ✅ Filtered Data according to search
  const filteredEmiUsers = emiUsers.filter(
    (user) =>
      user?.kyc?.id?.toString().includes(search) ||
      user?.name?.toLowerCase().includes(search.toLowerCase()) ||
      user?.phone?.toString().includes(search)
  );

  const filteredKycUsers = keycUsers.filter(
    (user) =>
      (!statusFilter ||
        user.status?.toLowerCase() === statusFilter.toLowerCase()) &&
      (!genderFilter ||
        user.gender?.toLowerCase() === genderFilter.toLowerCase()) &&
      (user?.id?.toString().includes(search) ||
        user?.name?.toLowerCase().includes(search.toLowerCase()) ||
        user?.user_id?.phone?.toString().includes(search))
  );
  return (
    <div>
      <Header />

      <div className="min-h-screen p-4 w-full mx-auto">
        {/* Tabs */}
        <div className="w-full mx-auto mt-4 flex mb-10 border-2 border-blue-800">
          <div
            onClick={() => setActiveTab("emi")}
            className={`w-1/2 text-center py-3 font-semibold text-lg cursor-pointer border-r border-blue-800 ${
              isEMI
                ? "bg-[#00479C] text-white"
                : "bg-[#F3F8FF] text-[#00479C] border-blue-800"
            }`}
          >
            User EMI Summary
          </div>

          <div
            onClick={() => setActiveTab("kyc")}
            className={`w-1/2 text-center py-3 font-semibold text-lg cursor-pointer ${
              !isEMI
                ? "bg-[#00479C] text-white"
                : "bg-[#F3F8FF] text-[#00479C] border-blue-800"
            }`}
          >
            KYC Approval
          </div>
        </div>

        {/* Card */}
        <div className="p-4 w-[80%] mx-auto bg-white h-[600px] rounded-xl shadow-lg overflow-auto">
          {/* Filters */}
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Search By User ID / Name / Phone"
              className="border px-4 py-2 rounded-md w-[300px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex gap-2">
              <button
                onClick={() => setCsvModalOpen(true)}
                className="w-30 bg-[#044b99] rounded text-white cursor-pointer"
              >
                Add Users
              </button>

              {/* ✅ Status Filter */}
              <select
                className="border px-4 py-2 rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">Status</option>
                <option value="pending">Pending</option>
                <option value="approve">Approved</option>
              </select>

              {/* Gender Filter */}
              <select
                className="border px-4 py-2 rounded-md"
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* EMI Table */}
          {isEMI ? (
            <table className="w-full text-sm border text-center">
              <thead className="bg-gray-100">
                <tr className="text-center">
                  <th className="p-3">User ID</th>
                  <th className="p-3">DRI User</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">Joining Date</th>
                  <th className="p-3">User Mob No.</th>
                  <th className="p-3">EMI Progress</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmiUsers?.map((user, idx) => (
                  <tr key={idx} className="border-t text-center">
                    <td className="p-3">{user?.kyc?.id}</td>
                    <td className="p-3 flex items-center gap-3">
                      {user?.name}
                    </td>
                    <td>{toTitleCase(user?.gender)}</td>
                    <td className="p-3">
                      {/* {new Date(user.kyc?.date).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })} */}
                      {user.kyc?.date}
                    </td>
                    <td className="p-3">{user?.phone}</td>
                    <td className="p-3">
                      {user?.emiPay}/{user?.totalEmi}
                    </td>
                    <td className="p-3">
                      <span>
                        <span
                          className={
                            user?.status?.toLowerCase() === "pending"
                              ? "bg-red-500 font-semibold"
                              : user?.status?.toLowerCase() === "paid"
                              ? "bg-green-500 font-semibold"
                              : "bg-blue-500"
                          }
                          style={{
                            width: "10px",
                            height: "10px",
                            display: "inline-block",
                            padding: "5px",
                            borderRadius: "50%",
                            marginRight: "5px",
                          }}
                        ></span>
                        <span>{user?.status}</span>
                      </span>
                    </td>
                    <td className="p-3 flex gap-3 justify-center">
                      <button
                        onClick={() =>
                          openModal({ view: "upload", phone: user?.phone })
                        }
                        className="bg-[#044B99] text-white px-3 py-1 rounded"
                      >
                        Upload File
                      </button>
                      <button
                        onClick={() =>
                          handleShow({
                            phone: user?.phone,
                            id: user?.kyc?.user_id,
                          })
                        }
                        className="bg-[#044B99] text-white px-3 py-1 rounded"
                      >
                        Upload EMI
                      </button>
                      <button
                        onClick={() =>
                          openModal({
                            view: "view",
                            phone: user?.phone,
                          })
                        }
                        className="font-semibold px-3 py-1 rounded"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            /* ✅ KYC Table */
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-100">
                <tr className="text-center">
                  <th className="p-3">DRI User</th>
                  <th className="p-3">Gender</th>
                  <th className="p-3">Joining Date</th>
                  <th className="p-3">User Mob No.</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredKycUsers?.map((user, idx) => (
                  <tr key={idx} className="border-t text-center">
                    <td className="p-3 flex items-center justify-center gap-3">
                      <div>
                        <div className="font-medium">{user?.name}</div>
                      </div>
                    </td>
                    <td>{toTitleCase(user?.gender)}</td>
                    <td className="p-3">{user?.date}</td>
                    <td className="p-3">{user?.user_id?.phone}</td>
                    <td className="p-3">
                      <span
                        className={`inline-flex items-center gap-2 ${
                          user.status?.toLowerCase() === "approve"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${
                            user.status?.toLowerCase() === "approve"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></span>
                        {user.status}
                        {console.log("dri", user)}
                      </span>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setReviewModalOpen(true);
                        }}
                        className="bg-[#044B99] text-white px-4 py-1 rounded-lg"
                      >
                        Review & Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modals */}
      <UploadEMIModal
        isOpen={isModalOpen}
        id={userid}
        onClose={() => {
          setIsModalOpen(false), window.location.reload();
        }}
        mode={modalMode}
      />

      <ReviewAssignModal
        isOpen={reviewModalOpen}
        onClose={() => {
          setReviewModalOpen(false), window.location.reload();
        }}
        userData={selectedUser}
      />
      <PayToDri
        show={show}
        phone={selectedPhone}
        handleClose={() => {
          handleClose(),
            getAllDriUers(),
            GetAllKycUser(),
            window.location.reload();
        }}
      />

      <UploadCSVModal
        isOpen={csvModalOpen}
        onClose={() => {
          setCsvModalOpen(false),
            getAllDriUers(),
            GetAllKycUser(),
            window.location.reload();
        }}
      />
    </div>
  );
}
