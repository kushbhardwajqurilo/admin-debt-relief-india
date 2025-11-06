"use client";
import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import { setStorage } from "@/url/storage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [background, setBackground] = useState("");
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [otpData, setOtpData] = useState({
    data: "",
    otp: "",
    password: "",
  });

  // Loading states for each button
  const [loginLoading, setLoginLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);

  const [disable, setDisable] = useState(false);

  // dialogs
  const [showDialog, setShowDialog] = useState(false);
  const [showOtpVerify, setShowOtpVerify] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) router.push("/admin/dashboard");
  }, [router]);

  useEffect(() => {
    setBackground(window.location.origin);
  }, []);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleOtpChange(e) {
    setOtpData({ ...otpData, [e.target.name]: e.target.value });
  }

  // ================= Login =================
  async function formSubmit(e) {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.admin.login}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const contentType = res.headers.get("content-type");
      const resData = contentType?.includes("application/json")
        ? await res.json()
        : null;

      if (res.ok && resData?.success) {
        setDisable(true);
        setStorage(resData);
        toast.success(resData?.message);
        router.push("/admin/dashboard");
      } else {
        toast.error(resData?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoginLoading(false);
    }
  }

  // ================= Request OTP =================
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setOtpLoading(true);
    try {
      if (!otpData.data) {
        toast.error("Please Enter Email or Phone");
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}${ApiRute.admin.requestAdminOtp}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: otpData.data }),
        }
      );

      const result = await response.json();
      if (result?.success) {
        toast.success(result?.message || "OTP sent successfully");
        setShowDialog(false);
        setShowOtpVerify(true);
      } else {
        toast.error(result?.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Something went wrong");
    } finally {
      setOtpLoading(false);
    }
  };

  // ================= Verify OTP + Reset Password =================
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setVerifyLoading(true);
    try {
      if (!otpData.data || !otpData.otp || !otpData.password) {
        toast.error("Please fill all fields");
        return;
      }

      const response = await fetch(
        `${API_BASE_URL}${ApiRute.admin.forgetPassword}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(otpData),
        }
      );

      const result = await response.json();
      if (result?.success) {
        toast.success(result?.message || "Password updated successfully");
        setShowOtpVerify(false);
        setOtpData({ data: "", otp: "", password: "" }); // Clear form
      } else {
        toast.error(result?.message || "OTP verification failed");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Something went wrong while verifying OTP");
    } finally {
      setVerifyLoading(false);
    }
  };

  // Reusable Spinner Component
  const Spinner = () => (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8z"
      />
    </svg>
  );

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background}/banners.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px] z-0" />
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center">
          <div
            className="w-24 h-24 rounded-full overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${background}/login.png)`,
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
            Debt Relief India
          </h2>
          <p className="text-white text-sm md:text-base font-light">
            Super Admin
          </p>
        </div>

        {/* ================= Login Form ================= */}
        <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-6 py-16 w-[400px] space-y-8 shadow-2xl">
          <input
            type="text"
            name="email"
            placeholder="Admin ID"
            className="w-full p-2 rounded-md bg-white/90 text-black placeholder-gray-700 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            disabled={disable || loginLoading}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded-md bg-white/90 text-black placeholder-gray-700 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            disabled={disable || loginLoading}
          />

          <p
            onClick={() => setShowDialog(true)}
            className="text-lg text-black font-light text-left cursor-pointer hover:underline"
          >
            Forgot Password ?
          </p>

          <button
            onClick={formSubmit}
            disabled={disable || loginLoading}
            className="w-full bg-[#044B99] hover:bg-[#033c73] text-white py-3 rounded-md font-semibold border border-blue-400 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-700/40 flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {loginLoading ? (
              <>
                <Spinner />
                Logging in...
              </>
            ) : (
              "Log In"
            )}
          </button>
        </div>
      </div>

      {/* ---- Step 1: Request OTP ---- */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[380px] relative">
            <button
              className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-black transition"
              onClick={() => setShowDialog(false)}
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Get OTP
            </h3>
            <form onSubmit={handleOtpSubmit} className="space-y-5">
              <input
                type="text"
                name="data"
                placeholder="Enter your email or phone"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onChange={handleOtpChange}
                value={otpData.data}
                required
              />
              <button
                type="submit"
                disabled={otpLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {otpLoading ? (
                  <>
                    <Spinner />
                    Sending OTP...
                  </>
                ) : (
                  "Send OTP"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ---- Step 2: Verify OTP + Reset Password ---- */}
      {showOtpVerify && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[380px] relative">
            <button
              className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-black transition"
              onClick={() => setShowOtpVerify(false)}
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Verify OTP & Reset
            </h3>
            <form onSubmit={handleVerifyOtp} className="space-y-5">
              <input
                type="text"
                name="data"
                placeholder="Email or Phone"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleOtpChange}
                value={otpData.data}
                disabled
              />
              <input
                type="number"
                name="otp"
                placeholder="Enter OTP"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleOtpChange}
                value={otpData.otp}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="New Password"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleOtpChange}
                value={otpData.password}
                required
              />
              <button
                type="submit"
                disabled={verifyLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {verifyLoading ? (
                  <>
                    <Spinner />
                    Verifying...
                  </>
                ) : (
                  "Verify & Reset"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
