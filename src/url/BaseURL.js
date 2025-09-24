// export const API_BASE_URL = "https://dri-vercel.vercel.app/api/v1";
export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.debtreliefindia.com/api/v1"
    : "https://4frnn03l-5000.inc1.devtunnels.ms/api/v1";
