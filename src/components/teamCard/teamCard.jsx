import "./teamCard.css";
import campaigns from "../../assets/icon-conversations-small.svg";
import leads from "../../assets/icon-leads-small.svg";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const TeamCard = ({ onToggleFavorites, team }) => {
  return (
    <div className="card">
      <img className="avatar" src={team.image} alt="Avatar" />
      <span className="name">{team.name}</span>
      <span className="date">
        {team.created_at ? <>Created on {team.created_at}</> : <></>}
      </span>
      <span className="desc">{team.description}</span>
      <span onClick={onToggleFavorites}>
        {team.is_favorited ? (
          <StarFilled className="star-selected" />
        ) : (
          <StarOutlined className="star" />
        )}
      </span>
      <div className="footer">
        <span className="footer-item">
          <img className="footer-icon" src={campaigns} alt="" />
          {team.campaigns_count} Campaigns
        </span>
        <span className="footer-item">
          <img className="footer-icon" src={leads} alt="" />
          {team.leads_count} Leads
        </span>
      </div>
    </div>
  );
};

export default TeamCard;
