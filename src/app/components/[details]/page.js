"use client";
import { useParams } from "next/navigation";
import Header from "../Header";
import toast from "react-hot-toast";
import { API_BASE_URL } from "@/url/BaseURL";
import { ApiRute } from "@/url/ApiRoute";
import React, { useEffect, useState } from "react";
import { formatIndianNumber } from "@/utlis/formatedNuber";
export default function UserDetails() {
  const { details } = useParams();
  const [userDetails, setUserDetails] = useState();
  const [creditTotal, setCreditTotal] = useState(0);
  const [persnalLoan, setPersonalLoan] = useState(0);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}${ApiRute.driUser.singe}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ phone: details }),
        });
        const result = await res.json();
        if (result?.success) {
          console.log(result);
          setUserDetails(result?.data);
          const sum = result?.data?.credit_Cards?.reduce((total, card) => {
            return Number(total) + Number(card?.amount);
          }, 0);
          setCreditTotal(sum);
          const psum = result?.data?.personal_Loans?.reduce((total, card) => {
            return Number(total) + Number(card?.amount);
          }, 0);
          setPersonalLoan(psum);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserDetails();
  }, [details]);
  return (
    <>
      <Header />

      <div className="w-full  bg-[#f5f8fe] h-screen p-10 ">
        <h2 className="uppercase mb-3 text-[25px]">
          {userDetails?.name}-{userDetails?.id}
        </h2>
        <div className="w-full flex gap-5 justify-center bg-[#f5f8fe] rounded-sm h-full">
          <div className="w-sm bg-white rounded-[7px] p-4 max-h-[550px] shadow-lg shadow-gray-300 border-1 border-gray-300 overflow-auto">
            <h2 className="text-center mb-3 text-[17px] font-bold">
              Credit Card Loan
            </h2>
            {userDetails?.credit_Cards?.map((val, pos) => (
              <React.Fragment key={pos}>
                <div
                  className="w-full bg-gray-50 mt-2 mb-2 p-2 border-1 border-gray-300 shadow rounded-[7px] hover:bg-white transition "
                  key={pos}
                >
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">Bank</span>
                    <span className="text-blue-500 font-bold">{val?.bank}</span>
                  </p>
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">Amount</span>
                    <span className="text-red-400 font-bold">
                      &#8377;&nbsp;{formatIndianNumber(val?.amount)}
                    </span>
                  </p>
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">CC Settlement</span>
                    <span className="text-red-400 font-bold">
                      {val?.settlement}
                    </span>
                  </p>
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">CC Total</span>
                    <span className="text-red-400 font-bold">
                      &#8377;&nbsp;
                      {formatIndianNumber(
                        (parseInt(val?.amount) * parseInt(val?.settlement)) /
                          100
                      )}
                    </span>
                  </p>
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">Estimated Saving</span>
                    <span className="text-green-600 font-bold">
                      &#8377;&nbsp;
                      {formatIndianNumber(
                        parseInt(val?.amount) -
                          (parseInt(val?.amount) * parseInt(val?.settlement)) /
                            100
                      )}
                    </span>
                  </p>
                </div>
              </React.Fragment>
            ))}
            <p className="bg-gray-50 mt-2 mb-2 p-2 border-1 border-gray-300 shadow rounded-[7px] flex justify-between">
              <span className="font-bold"> Credit Card Total </span>
              <span className="text-green-600 font-bold">
                &#8377;&nbsp;{formatIndianNumber(creditTotal)}
              </span>
            </p>
          </div>
          <div className="w-sm bg-white rounded-[7px] p-4 max-h-[550px] shadow-lg shadow-gray-300 border-1 border-gray-300 overflow-auto">
            <h2 className="text-center mb-3 text-[17px] font-bold">
              Personal Loan
            </h2>
            {userDetails?.personal_Loans?.map((val, pos) => (
              <React.Fragment key={pos}>
                <div
                  className="w-full bg-gray-50 mt-2 mb-2 p-2 border-1 border-gray-300 shadow rounded-[7px] hover:bg-white transition "
                  key={pos}
                >
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">Bank</span>
                    <span className="text-blue-500 font-bold">{val?.bank}</span>
                  </p>
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">Amount</span>
                    <span className="text-red-400 font-bold">
                      &#8377;&nbsp;{formatIndianNumber(val?.amount)}
                    </span>
                  </p>
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">PL Settlement</span>
                    <span className="text-red-400 font-bold">
                      {val?.settlement}
                    </span>
                  </p>
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">PL Total</span>
                    <span className="text-red-400 font-bold">
                      &#8377;&nbsp;
                      {formatIndianNumber(
                        (parseInt(val?.amount) * parseInt(val?.settlement)) /
                          100
                      )}
                    </span>
                  </p>
                  <p className="w-full flex justify-between mb-2 mt-2">
                    <span className="font-bold">Estimated Saving</span>
                    <span className="text-green-600 font-bold">
                      &#8377;&nbsp;
                      {formatIndianNumber(
                        parseInt(val?.amount) -
                          (parseInt(val?.amount) * parseInt(val?.settlement)) /
                            100
                      )}
                    </span>
                  </p>
                </div>
              </React.Fragment>
            ))}
            <p className="bg-gray-50 mt-2 mb-2 p-2 border-1 border-gray-300 shadow rounded-[7px] flex justify-between">
              <span className="font-bold"> Personal Loan Total </span>
              <span className="text-green-600 font-bold">
                &#8377;&nbsp;{formatIndianNumber(persnalLoan)}
              </span>
            </p>
          </div>

          <div className="w-sm bg-white rounded-[7px] p-4 max-h-[330px] shadow-lg shadow-gray-300 border-1 border-gray-300 overflow-auto">
            <h2 className="text-center mb-3 text-[17px] font-bold">
              Settlement Detail
            </h2>
            <div className="w-full bg-gray-50 mt-2 mb-2 p-2 border-1 border-gray-300 shadow rounded-[7px] hover:bg-white transition ">
              <div className="w-full">
                {userDetails?.Service_Fees?.toString()?.trim().length !== 0 ? (
                  <p className="flex justify-between mt-2 mb-2">
                    <span className="font-bold"> Service Fees</span>
                    <span>
                      &#8377;&nbsp;
                      {formatIndianNumber(userDetails?.Service_Fees)}
                    </span>
                  </p>
                ) : (
                  <p className="flex justify-between mt-2 mb-2">
                    <span className="font-bold"> Service Advance</span>
                    <span>
                      &#8377;&nbsp;
                      {formatIndianNumber(userDetails?.Service_Advance_Total)}
                    </span>
                  </p>
                )}

                <p className="flex justify-between mt-2 mb-2">
                  <span className="font-bold">Fees</span>
                  <span>{userDetails?.fees}%</span>
                </p>
                <p className="flex justify-between mt-2 mb-2">
                  <span className="font-bold">GST</span>
                  <span>{userDetails?.gst}%</span>
                </p>
                <p className="flex justify-between mt-2 mb-2">
                  <span className="font-bold">Settelement Percent</span>
                  <span>{userDetails?.Settlement_Percent}%</span>
                </p>
                <p className="flex justify-between mt-2 mb-2">
                  <span className="font-bold">No Of EMI</span>
                  <span>{userDetails?.totalEmi}</span>
                </p>

                <p className="flex justify-between mt-2 mb-2">
                  <span className="font-bold">Monthly EMI</span>
                  <span>
                    &#8377;&nbsp;{formatIndianNumber(userDetails?.monthlyEmi)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
