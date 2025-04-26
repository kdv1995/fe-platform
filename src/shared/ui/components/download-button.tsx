import { handleDownload } from "@/shared/utils/helpers/download-file";
import { Button } from "antd";

export const DownloadButton = ({
  url,
  filename,
}: {
  url: string;
  filename: string;
}) => (
  <Button
    type="primary"
    className="mt-2"
    onClick={() => handleDownload(url, filename)}
  >
    Download Summary
  </Button>
);
