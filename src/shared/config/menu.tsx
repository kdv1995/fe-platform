import { MenuProps } from "antd";
import { HistoryOutlined, HomeFilled, UploadOutlined } from "@ant-design/icons";

export type MenuItem = Required<MenuProps>["items"][number];

export const site = {
  items: [
    {
      label: "Home",
      url: "/",
      key: "/",
      icon: <HomeFilled />,
    },
    {
      label: "Upload",
      url: "/upload",
      key: "upload",
      icon: <UploadOutlined />,
    },
    {
      label: "History",
      url: "/history",
      key: "history",
      icon: <HistoryOutlined />,
    },
  ],
};
