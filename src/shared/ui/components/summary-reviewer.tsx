import { useState, useEffect, FC } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, Spin, message } from "antd";
import type { UploadProps } from "antd";
import { uploadFile } from "@/features/pdf/upload/api/upload-file";

const { Dragger } = Upload;

export const SummaryVisualizator: FC = () => {
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
    }, 500); // Typing speed (ms)

    return () => clearInterval(interval);
  }, [summary, index]);

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag a PDF file to this area to upload and summarize
        </p>
        <p className="ant-upload-hint">Only PDF files are supported.</p>
      </Dragger>

      {/* Visualization */}
      {isLoading && <Spin style={{ marginTop: 24 }} />}

      {!isLoading && lines.length > 0 && (
        <div
          style={{
            marginTop: 24,
            background: "#f7f7f7",
            padding: 16,
            borderRadius: 8,
            minHeight: 200,
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
          }}
        >
          {lines.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
