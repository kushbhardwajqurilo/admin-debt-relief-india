"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import UploadEMIModal from "../components/UploadEMIModal";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import ReviewAssignModal from "../components/ReviewAssignModal";
import PayToDri from "../components/PaytoDri";
import UploadCSVModal from "../components/uploadUsersFromCSV";
import { toTitleCase } from "@/utlis/string";
import toast from "react-hot-toast";
import { getStroage } from "@/url/storage";
import UpdateProfile from "../components/UpdateProfile";

function formatDate(date) {
  const dateArr = date?.split("-");
  const dateTime = dateArr[dateArr?.length - 1];
  const day = dateTime?.split("T")[0];
  const year = dateArr[0];
  const month = dateArr[1];
  return `${day}/${month}/${year}`;
}
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
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [phones, setPhones] = useState([]);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [updateUser, setUpdateUser] = useState(null);
  const [type, setType] = useState("");

  useEffect(() => {
    GetAllKycUser();
    getAllDriUers();
  }, []);

  const GetAllKycUser = async () => {
    const res = await fetch(`${API_BASE_URL}${ApiRute.kyc.get}`);
    const result = await res.json();
    setKycUser(result?.data || []);
  };

  const getAllDriUers = async () => {
    const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.getAll}`);
    const result = await res.json();
    if (result?.success) setEmiUsers(result?.data || []);
  };

  const openModal = (mode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleShow = (data) => {
    setPhone(data?.phone);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const isEMI = activeTab === "emi";

  const filteredEmiUsers = emiUsers.filter(
    (user) =>
      user?.id?.toString().includes(search) ||
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

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allUserIds = [];
      const allPhones = [];

      filteredEmiUsers.forEach((user) => {
        if (user?.id) {
          allUserIds.push(user.id);
        } else if (user?.phone) {
          allPhones.push(user.phone);
        }
      });

      setSelectedUsers([...allUserIds, ...allPhones]);
      setUserIds(allUserIds);
      setPhones(allPhones);
    } else {
      setSelectedUsers([]);
      setUserIds([]);
      setPhones([]);
    }
  };

  // ✅ Updated handleSelectOne (single checkbox)
  const handleSelectOne = (user) => {
    const idOrPhone = user?.id ? user.id : user?.phone;

    setSelectedUsers((prev) =>
      prev.includes(idOrPhone)
        ? prev.filter((u) => u !== idOrPhone)
        : [...prev, idOrPhone]
    );

    // Update separate arrays
    if (user?.id) {
      setUserIds((prev) =>
        prev.includes(user.id)
          ? prev.filter((u) => u !== user.id)
          : [...prev, user.id]
      );
    } else if (user?.phone) {
      setPhones((prev) =>
        prev.includes(user.phone)
          ? prev.filter((p) => p !== user.phone)
          : [...prev, user.phone]
      );
    }
  };

  // ✅ Delete
  const handleDelete = async () => {
    if (!selectedUsers.length) {
      toast.error("No users selected");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.delete}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify({ userIds, phones }),
      });

      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
        setSelectedUsers([]);
        setUserIds([]);
        setPhones([]);
        getAllDriUers();
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

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
                onClick={() => {
                  setCsvModalOpen(true);
                  setType("emi");
                }}
                className="w-30 bg-[#044b99] rounded text-white cursor-pointer hover:bg-white border-1 hover:border-[#044b99] hover:text-[#044b99] transition"
              >
                Insert EMI&apos;s
              </button>
              <button
                onClick={handleDelete}
                className="w-30 bg-[#044b99] rounded text-white cursor-pointer hover:bg-white border-1 hover:border-[#044b99] hover:text-[#044b99] transition"
              >
                Delete Users
              </button>
              <button
                onClick={() => {
                  setCsvModalOpen(true);
                  setType("user");
                }}
                className="w-30 bg-[#044b99] rounded text-white cursor-pointer hover:bg-white border-1 hover:border-[#044b99] hover:text-[#044b99] transition"
              >
                Add Users
              </button>

              <select
                className="border px-4 py-2 rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">Status</option>
                <option value="pending">Pending</option>
                <option value="approve">Approved</option>
              </select>

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
                  <th className="p-3">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={
                        selectedUsers.length ===
                          filteredEmiUsers.filter((u) => u?.id || u?.phone)
                            .length && filteredEmiUsers.length > 0
                      }
                    />
                  </th>
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
                {filteredEmiUsers.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="p-4 text-center">
                      No Users Found
                    </td>
                  </tr>
                ) : (
                  filteredEmiUsers.map((user, idx) => (
                    <tr key={idx} className="border-t text-center">
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(
                            user?.id || user?.phone
                          )}
                          onChange={() => handleSelectOne(user)}
                        />
                      </td>
                      <td className="p-3">{user?.id}</td>
                      <td className="p-3 flex items-center gap-3">
                        {user?.name}
                      </td>
                      <td>{toTitleCase(user?.gender)}</td>
                      <td className="p-3">{user.kyc?.date}</td>
                      <td className="p-3">{user?.phone}</td>
                      <td className="p-3">
                        {user?.emiPay}/{user?.totalEmi}
                      </td>
                      <td className="p-3">
                        <span
                          className={`inline-flex items-center gap-2 ${
                            user.status?.toLowerCase() === "paid"
                              ? "text-green-600"
                              : user.status?.toLowerCase() === "pending"
                              ? "text-red-600"
                              : "text-blue-600"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              user.status?.toLowerCase() === "paid"
                                ? "bg-green-500"
                                : user.status?.toLowerCase() === "pending"
                                ? "bg-red-500"
                                : "bg-blue-500"
                            }`}
                          ></span>
                          {user.status}
                        </span>
                      </td>
                      <td className="p-3 flex gap-3 justify-center">
                        {selectedUsers.length === 1 &&
                        selectedUsers.includes(user?.id || user?.phone) ? (
                          // ✅ Update button
                          <button
                            className="bg-[#044B99] text-white px-3 py-1 rounded"
                            onClick={() => {
                              setUpdateUser(user); // update modal user
                              setUpdateModalOpen(true); // open modal
                            }}
                          >
                            Update
                          </button>
                        ) : (
                          // ✅ Default Actions
                          <>
                            <button
                              onClick={() =>
                                openModal({
                                  view: "upload",
                                  phone: user?.phone,
                                })
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
                              Manual EMI
                            </button>
                            <button
                              onClick={() =>
                                openModal({ view: "view", phone: user?.phone })
                              }
                              className="font-semibold px-3 py-1 rounded"
                            >
                              View
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          ) : (
            /* KYC Table */
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
                {filteredKycUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-4 text-center">
                      No Users Found
                    </td>
                  </tr>
                ) : (
                  filteredKycUsers.map((user, idx) => (
                    <tr key={idx} className="border-t text-center">
                      <td className="p-3 flex items-center justify-center gap-3">
                        <div className="font-medium">{user?.name}</div>
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
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modals */}
      <UploadEMIModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
      />
      <ReviewAssignModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        userData={selectedUser}
      />
      <PayToDri
        show={show}
        phone={selectedPhone}
        handleClose={() => {
          handleClose();
          getAllDriUers();
          GetAllKycUser();
        }}
      />
      <UploadCSVModal
        isOpen={csvModalOpen}
        onClose={() => {
          setCsvModalOpen(false);
          getAllDriUers();
          GetAllKycUser();
        }}
        types={type}
      />
      {updateModalOpen && (
        <UpdateProfile
          isOpen={updateModalOpen}
          onClose={() => setUpdateModalOpen(false)}
          userData={updateUser}
        />
      )}
    </div>
  );
}
