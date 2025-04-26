export const handleDownload = async (url: string, filename: string) => {
  const response = await fetch(url);
  const blob = await response.blob();

  const blobUrl = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = filename; // You can extract filename or hardcode
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(blobUrl);
};
