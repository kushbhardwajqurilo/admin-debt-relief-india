"use client";
import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import { setStorage } from "@/url/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function LoginForm() {
  const [backgroud, setBackground] = useState("");
  const router = useRouter();
  const [profileImage, setProfileImage] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/admin/dashboard");
    }
  }, [router]);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function formSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const header = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const res = await fetch(`${API_BASE_URL}${ApiRute.admin.login}`, header);
      const contentType = res.headers.get("content-type");
      let resData;
      if (contentType && contentType.includes("application/json")) {
        resData = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Unexpected response: ${text}`);
      }
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
      setLoading(false);
    }
  }

  useEffect(() => {
    setBackground(window.location.origin);
  }, []);
  return (
    <div className=" h-screen w-full bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black/4 backdrop-blur-[4px] z-0" />
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center">
          <div className="w-35 h-35 bg-red-100 rounded-full overflow-hidden shadow-lg"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
            Debt Relief India
          </h2>
          <p className="text-white text-sm md:text-base font-light">
            Super Admin
          </p>
        </div>
        <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-6 py-16 w-[400px] space-y-8 shadow-2xl">
          <input
            type="text"
            name="email"
            placeholder="Admin ID"
            className="w-full p-2 rounded-md bg-white/90 text-black placeholder-gray-700 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            disabled={disable || loading}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded-md bg-white/90 text-black placeholder-gray-700 font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            disabled={disable || loading}
          />
          <p className="text-lg text-black font-light text-left">
            Forgot Password ?
          </p>
          <button
            onClick={formSubmit}
            disabled={disable || loading}
            className="w-full bg-[#044B99] hover:bg-[#044B99] text-white py-2 rounded-md font-semibold border border-blue-400 hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-700/40 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
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
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Logging in...
              </>
            ) : (
              "Log In"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
