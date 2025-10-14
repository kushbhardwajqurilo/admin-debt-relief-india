import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import { getStroage } from "@/url/storage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function PaidDialBox() {
  const [content, setcontent] = useState(0);
  const [dialboxContent, setdialboxContent] = useState("");
  const getDialBoxContent = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.admin.getdialbox}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
      });
      const result = await res.json();
      console.log("dd", result);
      setcontent(result?.data || "");
    } catch (error) {
      console.error(error);
    }
  };
  // add content
  const addDiaBoxContentFun = async () => {
    try {
      const data = {
        content: dialboxContent,
      };
      const res = await fetch(
        `${API_BASE_URL}${ApiRute.admin.adddialboxContent}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${getStroage().token}`,
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      if (result?.success) {
        toast.success(result?.message);
        setdialboxContent("");
        refreshFun();
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  function refreshFun() {
    getDialBoxContent();
  }
  useEffect(() => {
    getDialBoxContent();
  }, []);
  return (
    <>
      <div className="w-sm bg-white flex items-center flex-col shadow rounded-2xl p-5 mt-10 max-h-[210px]">
        {/* content chat number */}
        <h2 className="text-xl font-semibold mb-4 capitalize">
          Paid Dialogbox
        </h2>
        <p>Content:- {content?.content}</p>
        <div className="flex items-center gap-3 flex-col">
          <input
            type="text"
            placeholder="Enter Content "
            className="flex-1 border rounded px-4 py-1 outline-none focus:ring-2 focus:ring-gray-500 mt-3"
            onChange={(e) => setdialboxContent(e.target.value)}
          />
          <div className="flex gap-2 mt-2">
            <button
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 w-20 py-1  rounded text-sm "
              onClick={addDiaBoxContentFun}
            >
              Add
            </button>
            <button
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 w-20 py-1  rounded text-sm "
              onClick={addDiaBoxContentFun}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
