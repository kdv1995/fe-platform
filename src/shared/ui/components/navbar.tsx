import { FC, useState } from "react";
import { Menu } from "antd";
import { MenuProps } from "antd";

import { useNavigate } from "react-router-dom";
import { site } from "@/shared/config/menu";

export const Navbar: FC = () => {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log(e);
    navigate(e.key);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={site.items}
    />
  );
};
