import "./header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import companies from "../../assets/icon-companies.svg";
import plus from "../../assets/plus.svg";

const Header = ({ onSearch }) => {
  const items = [
    {
      key: "all",
      label: (
        <Link
          className="list-group-item"
          to="all"
          onClick={() => setPath("all")}
        >
          &nbsp;&nbsp;&nbsp;All&nbsp;&nbsp;&nbsp;
        </Link>
      ),
    },
    {
      key: "favorites",
      label: (
        <Link
          className="list-group-item"
          to="favorites"
          onClick={() => setPath("favorites")}
        >
          Favorites
        </Link>
      ),
    },
    {
      key: "archived",
      label: (
        <Link
          className="list-group-item"
          to="archived"
          onClick={() => setPath("archived")}
        >
          Archived
        </Link>
      ),
    },
  ];
  const [keyWord, setKeyWord] = useState([]);
  const [path, setPath] = useState("");
  const onChange = (event) => setKeyWord(event.target.value);
  const onAddNewTeam = () => {
    alert("add new team");
  };

  useEffect(() => {
    console.log(window.location.pathname.split("/")[2]);
    setPath(window.location.pathname.split("/")[2]);
  }, [path]);

  return (
    <div className="header">
      <div className="header-row" id="row-1">
        <div className="title">
          <img className="title-icon" src={companies} alt="logo" />
          <span className="title-text">Teams</span>
        </div>
        <div className="create-button">
          <Button
            type="primary"
            icon={
              <img
                src={plus}
                alt="+"
                style={{ width: "16px", marginRight: "12px" }}
              />
            }
            onClick={onAddNewTeam}
          >
            Create New Team
          </Button>
        </div>
      </div>
      <div className="header-row" id="row2">
        <div className="header-menu" id="row2-menu">
          <Menu mode="horizontal" selectedKeys={[path]} items={items}></Menu>
        </div>
        <div className="search" id="row2-search">
          <SearchOutlined style={{ fontWeight: "30", color: "#999" }} />
          <Input
            placeholder="Search team name ..."
            onPressEnter={() => onSearch(keyWord)}
            onChange={onChange}
            value={keyWord}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
