import { client } from "@/shared/utils/axios";

interface HistoryItem {
  id: string;
  title: string;
  created_at: string;
  upload_url: string;
}
export const getHistory = async () => {
  const response = await client.get("pdf/history");
  return response.data as HistoryItem[];
};
