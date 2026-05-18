import axiosInstance from "./axiosConfig";
  import type { AxiosResponse } from "axios";

class ApiClient {
async get<T>(
  url: string,
  params?: Record<string, unknown>,
): Promise<AxiosResponse<T>> {
  const res = await axiosInstance.get<T>(url, { params });
  console.log(res)

  return res;
}
  async post<T>(url: string, data?: unknown): Promise<T> {
    const res = await axiosInstance.post<T>(url, data);
    return res.data;
  }
  async put<T>(url: string, data?: unknown): Promise<T> {
    const res = await axiosInstance.put<T>(url, data);
    return res.data;
  }
  async patch<T>(url: string, data?: unknown): Promise<T> {
    const res = await axiosInstance.patch<T>(url, data);
    return res.data;
  }
  async delete<T>(url: string): Promise<T> {
    const res = await axiosInstance.delete<T>(url);
    return res.data;
  }
}
const apiClient=new ApiClient()
export default  apiClient;