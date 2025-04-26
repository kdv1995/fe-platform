import { FC } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar: FC = () => {
  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          className="flex items-center gap-4"
        >
          <div>
            <Menu.Item key="home">
              <Link to="/">PDF Summarizer</Link>
            </Menu.Item>
          </div>

          <Menu.Item key="upload">
            <Link to="/upload">Upload</Link>
          </Menu.Item>
          <Menu.Item key="history">
            <Link to="/history">History</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
