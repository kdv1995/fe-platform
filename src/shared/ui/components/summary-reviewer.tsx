import { FC } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { useSummaryVisualizer } from "@/shared/hooks/summarization-hook";

const { Dragger } = Upload;

export const SummaryVisualizator: FC = () => {
  const { props, isLoading, lines } = useSummaryVisualizer();
  return (
    <div className="mt-4">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag a PDF file to this area to upload and summarize
        </p>
        <p className="ant-upload-hint">Only PDF files are supported.</p>
      </Dragger>

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
