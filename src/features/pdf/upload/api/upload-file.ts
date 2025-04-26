import { client } from "@/shared/utils/axios";

export const uploadFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await client.post("/pdf/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "text", // Important: expect plain text
  });

  return response.data; // The summary text
};
