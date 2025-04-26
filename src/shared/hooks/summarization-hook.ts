import { useEffect, useState } from "react";
import { message } from "antd";
import type { UploadProps } from "antd";
import { uploadFile } from "@/features/pdf/upload/api/upload-file";

export const useSummaryVisualizer = () => {
  const [summary, setSummary] = useState<string>("");
  const [lines, setLines] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const props: UploadProps = {
    name: "file",
    accept: ".pdf",
    customRequest: async ({ file, onSuccess, onError }) => {
      try {
        setLines([]);
        setSummary("");
        setIndex(0);
        setIsLoading(true);

        const text = await uploadFile(file as File);
        if (!text) {
          return message.error("Failed to summarize the file.");
        }
        setSummary(text);

        setIsLoading(false);
        onSuccess?.({});
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        onError?.(error as Error);
      }
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  useEffect(() => {
    if (!summary) return;

    const splitted = summary.split("\n").filter((line) => line.trim() !== "");

    const interval = setInterval(() => {
      setLines((prev) => {
        if (index >= splitted.length) {
          clearInterval(interval);
          return prev;
        }
        return [...prev, splitted[index]];
      });
      setIndex((prev) => prev + 1);
    }, 400);

    return () => clearInterval(interval);
  }, [summary, index]);

  return { props, isLoading, lines };
};
