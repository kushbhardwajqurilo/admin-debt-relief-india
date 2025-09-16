import { ApiRute } from "@/url/ApiRoute";
import { API_BASE_URL } from "@/url/BaseURL";
import { getStroage } from "@/url/storage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Whatsapp() {
  const [whatsapp, setWhatsapp] = useState(0);
  const [whatsappNumber, setWhatsappNumber] = useState(0);
  const getWhatsapp = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${ApiRute.whatsapp.get}`);
      const result = await res.json();
      setWhatsapp(result || "");
    } catch (error) {
      console.error(error);
    }
  };
  // add whatsapp
  const addWhatsapp = async () => {
    try {
      const data = {
        number: whatsappNumber,
      };
      const res = await fetch(`${API_BASE_URL}${ApiRute.whatsapp.add}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      toast.success(result?.message);
    } catch (error) {
      console.error(error);
    }
  };
  const updateWhatsapp = async () => {
    try {
      const data = {
        number: whatsappNumber,
      };
      if (!data.number) {
        toast.error("whatsapp Number Missing");
        return;
      }
      const res = await fetch(`${API_BASE_URL}${ApiRute.whatsapp.update}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${getStroage().token}`,
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      toast.success(result?.message);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getWhatsapp();
  }, []);
  return (
    <>
      <div className="w-sm bg-white flex items-center flex-col shadow rounded-2xl p-5 mt-10 max-h-[210px]">
        {/* whatsapp chat number */}
        <h2 className="text-xl font-semibold mb-4 capitalize">
          whatsApp support number
        </h2>
        <p>Assinged:- {whatsapp?.whatsapp?.number}</p>
        <div className="flex items-center gap-3 flex-col">
          <input
            type="text"
            placeholder="Enter WhatsApp number"
            className="flex-1 border rounded px-4 py-1 outline-none focus:ring-2 focus:ring-gray-500 mt-3"
            onChange={(e) => setWhatsappNumber(e.target.value)}
          />
          <div className="flex gap-2 mt-2">
            <button
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 w-20 py-1  rounded text-sm "
              onClick={addWhatsapp}
            >
              Add
            </button>
            <button
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 w-20 py-1  rounded text-sm "
              onClick={updateWhatsapp}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
