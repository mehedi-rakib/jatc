import React from "react";
import { Dropdown, Space } from "antd";

const CustomDropdown = ({ label, items }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space className="nav-item ">{label}</Space>
      </a>
    </Dropdown>
  );
};

export default CustomDropdown;
