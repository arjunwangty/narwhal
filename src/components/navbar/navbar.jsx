import "./navbar.css";
import data from "../../data.json";
import React, { useState, useEffect } from "react";
import { Badge } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import mail from "../../assets/icon-mail.svg";

const Navbar = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    /*
    const fetchData = async ()=> {
      const result = await axios(
        '/api/xxxxx',
      );
      setUser(result.data.user);
    }
    instead, data is directly imported from file to simulate API response.
    */
    setUser(data.current_user);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-user">
          <span className="navbar-1">Narwhal</span>
          <span className="navbar-2">Teams</span>
          <span className="navbar-3">
            <Badge
              size="small"
              count={user.notifications_count}
              offset={[-19, 0]}
              style={{
                width: "18px",
                height: "18px",
                fontSize: "8px",
                fontFamily: "ProximaNova",
                borderRadius: "50%",
                paddingTop: "0.5px",
                background: "#2995DA",
                border: "2px solid #FFFFFF",
              }}
            >
              <img
                className="icon"
                src={mail}
                alt="Mail"
                onClick={() => {
                  alert("notification");
                }}
              />
            </Badge>
            <span className="greeting-text">Hello, {user.name}</span>
            <img className="avatar" src={user.avatar} alt="Avatar" />
            <CaretDownOutlined
              style={{ opacity: "0.2" }}
              onClick={() => {
                alert("options");
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
