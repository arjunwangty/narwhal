import "./sidebar.css";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import logo from "../../assets/sw-logo-white.svg";
import campaign from "../../assets/icon-campaign.svg";
import leads from "../../assets/icon-leads.svg";
import reports from "../../assets/icon-reports.svg";
import teams from "../../assets/icon-teams.svg";

const items = [
  {
    key: "campaign",
    icon: <img className="campaign" src={campaign} alt="Campaign" />,
    label: (
      <Link className="list-group-item" to="/alternate">
        Campaign
      </Link>
    ),
  },
  {
    key: "teams",
    icon: <img className="teams" src={teams} alt="Teams" />,
    label: (
      <Link className="list-group-item" to="/teams">
        Teams
      </Link>
    ),
  },
  {
    key: "leads",
    icon: <img className="leads" src={leads} alt="Leads" />,
    label: (
      <Link className="list-group-item" to="/alternate">
        Leads
      </Link>
    ),
  },
  {
    key: "reports",
    icon: <img className="reports" src={reports} alt="Reports" />,
    label: (
      <Link className="list-group-item" to="/alternate">
        Reports
      </Link>
    ),
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="Logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={"teams"}
        items={items}
      />
    </div>
  );
};

export default Sidebar;
