import api from "@/lib/axios";

export const fetchProductsApi = async () => {
  const res = await api.get("/products/");
  return res.data;
};