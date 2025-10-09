"use client";

import { Dialog } from "@headlessui/react";
import { FiUpload } from "react-icons/fi";
import Image from "next/image";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import { useEffect, useState, useRef } from "react";
import { getStroage } from "@/url/storage";
import { toTitleCase } from "@/utlis/string";
import toast from "react-hot-toast";
import LoanEMIForm from "./uploadManualEmiModal";
import { useRouter } from "next/navigation";
import CloseEMI from "./CloseEMI";

export default function UploadEMIModal({ isOpen, onClose, mode, refreshFun }) {
  const isUploadMode = mode.view === "upload";
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [advocate, setAdvocate] = useState();
  const [off, setOff] = useState(false);
  const [file, setFile] = useState(null);
  const [sendEmi, setSendEMi] = useState({ phone: "", file: null });
  const [showLoanForm, setShowLoanForm] = useState({ status: false, id: "" });
  const [closeUser, setCloseUser] = useState(false);
  const [loadingPaid, setLoadingPaid] = useState(false);

  const router = useRouter();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      alert("Please upload a valid CSV file.");
      e.target.value = "";
      return;
    }
    setSendEMi({ phone: "", file });
  };
  // console.log("userdata", userData);
  const uploadEmi = async (phone) => {
    if (!sendEmi.file) return toast.error("Please select CSV file!");
    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("file", sendEmi.file);
    try {
      setUploading(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.emi.upload}`, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      result?.success
        ? toast.success(result?.message)
        : toast.error(result?.message);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      refreshFun();
      setUploading(false);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  const singleUser = async (phone) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.singe}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const result = await res.json();
      setUserData(result?.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getAssignedAdvocate = async (id) => {
    try {
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.advocate.single}/${id}`
      );
      const result = await res.json();
      console.log("advocate assign", result);
      if (result?.success) setAdvocate(result?.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInvoiceChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please select a valid PDF file!");
    }
  };

  const handleUploadInvoice = async () => {
    if (!file) return toast.error("Please select a PDF file first!");
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("phone", mode?.phone);
    try {
      setOff(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.invoice.add}`, {
        method: "POST",
        headers: { authorization: `Bearer ${getStroage().token}` },
        body: formData,
      });
      const result = await res.json();
      result?.success
        ? toast.success(result?.message)
        : toast.error(result?.message);
    } catch (err) {
      console.error(err);
    } finally {
      refreshFun();
      setOff(false);
      setFile(null);
    }
  };

  const markAsPaid = async () => {
    try {
      setLoadingPaid(true);
      const res = await fetch(`${API_BASE_URL}${ApiRute.emi.markaspaid}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify({
          phone: mode.phone,
          user_id: userData?.kyc?.user_id,
        }),
      });
      const result = await res.json();
      result?.success
        ? toast.success(result?.message)
        : toast.error(result?.message);
    } catch (err) {
      console.error(err);
    } finally {
      refreshFun();
      setLoadingPaid(false);
    }
  };

  useEffect(() => {
    if (!isUploadMode && mode?.phone) singleUser(mode.phone);
  }, [mode, isUploadMode]);

  useEffect(() => {
    if (userData?.kyc?.assign_advocate)
      getAssignedAdvocate(userData.kyc.assign_advocate);
  }, [userData]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center">
        {isUploadMode ? (
          <Dialog.Panel className="mx-auto w-full max-w-3xl rounded-2xl bg-[#f1f6fe] p-6">
            <Dialog.Title className="text-4xl font-bold text-center mb-4">
              Upload Data Payment
            </Dialog.Title>
            <div className="flex flex-col items-center">
              <Image src="/csv.png" alt="CSV Icon" width={160} height={160} />
              <label
                htmlFor="fileUpload"
                className="mt-6 inline-flex items-center gap-2 text-white font-bold text-xl px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg cursor-pointer"
              >
                <FiUpload className="text-2xl" /> Upload File
              </label>
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                accept=".csv"
                onChange={handleFileChange}
              />
              <p className="text-red-600 mt-2 text-sm font-semibold">
                *Upload only CSV files
              </p>
              <div className="flex">
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => uploadEmi(mode?.phone)}
                  disabled={uploading}
                  className={`mt-6 ml-6 px-6 py-2 rounded-lg text-white ${
                    uploading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600"
                  }`}
                >
                  {uploading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>
          </Dialog.Panel>
        ) : (
          <Dialog.Panel className="mx-auto max-w-7xl rounded-2xl bg-[#f1f6fe] p-6 grid grid-cols-3 gap-4">
            {loading ? (
              <div className="col-span-3 flex justify-center items-center h-80">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
              </div>
            ) : (
              <>
                {/* Profile */}
                <div className="col-span-1 w-[280px] bg-white rounded-xl shadow-md p-4">
                  <div className="flex flex-col items-center">
                    <h2 className="text-l font-bold mt-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white w-full text-center rounded-t-xl py-2">
                      {`${toTitleCase(userData?.name)} ${toTitleCase(
                        userData?.kyc?.lastname
                      )}`}
                    </h2>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <strong>User ID:</strong> {userData?.kyc?.id}
                    </p>
                    <p>
                      <strong>Gender:</strong> {userData?.gender}
                    </p>
                    <p>
                      <strong>Mob No.:</strong> {userData?.phone}
                    </p>
                    <p>
                      <strong>E-mail ID:</strong> {userData?.kyc?.email}
                    </p>
                    <p
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() =>
                        router.push(`./components/${userData?.kyc?.user_id}`)
                      }
                    >
                      <strong>View Details</strong>
                    </p>
                  </div>
                </div>

                {/* Advocate + Invoice */}
                <div className="col-span-2 space-y-4">
                  <div className="w-full flex">
                    <div className="bg-white rounded-xl w-full shadow-md p-4 flex items-center gap-4">
                      <Image
                        src={
                          advocate?.advocateImage
                            ? advocate.advocateImage
                            : "/default-avatar.png"
                        }
                        alt="Advocate"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />

                      <div>
                        <p className="font-semibold text-sm">
                          Assigned Advocate
                        </p>
                        <p className="text-md">{advocate?.name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white w-full rounded-xl shadow-md p-4 flex items-center gap-4">
                    <div>
                      <label className="px-6 py-2 text-white font-semibold bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg flex items-center gap-2 cursor-pointer">
                        <FiUpload /> Select Invoice
                        <input
                          type="file"
                          accept="application/pdf"
                          onChange={handleInvoiceChange}
                          className="hidden"
                        />
                      </label>
                      {file && (
                        <p className="text-sm text-gray-700">
                          Selected File:{" "}
                          <span className="font-semibold">{file.name}</span>
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleUploadInvoice}
                      className="px-6 py-2 bg-[#1172da] text-white rounded-lg"
                      disabled={off}
                    >
                      {off ? "Uploading..." : "Upload"}
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end items-end gap-4">
                    <button
                      className="bg-[#1172da] text-white px-6 py-2 rounded-lg font-bold cursor-pointer"
                      onClick={() =>
                        setCloseUser({
                          status: true,
                          id: userData?.kyc?.user_id,
                        })
                      }
                    >
                      {load ? "Closing..." : "Close EMI"}
                    </button>
                    <button
                      className="bg-[#1172da] text-white px-6 py-2 rounded-lg font-bold cursor-pointer"
                      onClick={markAsPaid}
                    >
                      {loadingPaid ? "Marking..." : "Mark as Paid"}
                    </button>
                    <button
                      className="bg-[#1172da] text-white px-6 py-2 rounded-lg font-bold cursor-pointer"
                      onClick={() =>
                        setShowLoanForm({
                          status: true,
                          id: userData?.kyc?.user_id,
                        })
                      }
                    >
                      Add Loan
                    </button>
                    <button
                      className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold cursor-pointer"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            )}
          </Dialog.Panel>
        )}
      </div>

      {showLoanForm && (
        <LoanEMIForm
          show={showLoanForm.status}
          handleClose={() => setShowLoanForm({ status: false })}
          phone={mode?.phone}
          id={showLoanForm.id}
        />
      )}
      {closeUser && (
        <CloseEMI
          show={closeUser.status}
          handleClose={() => setCloseUser({ status: false })}
          phone={mode?.phone}
          id={closeUser.id}
        />
      )}
    </Dialog>
  );
}
