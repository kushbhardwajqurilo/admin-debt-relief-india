// export const API_BASE_URL = "https://dri-vercel.vercel.app/api/v1";
export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.debtreliefindia.com/api/v1"
    : "http://localhost:5000/api/v1";
