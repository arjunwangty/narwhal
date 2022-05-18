import "./activityCard.css";

const ActivityCard = ({ activity }) => {
  const generateActionText = (action, name, target) => {
    switch (action) {
      case "added_leads":
        return (
          <>
            <b>{name}</b> added new leads to <b>{target}</b>
          </>
        );
      case "archived_team":
        return (
          <>
            <b>{name}</b> archived the team <b>{target}</b>
          </>
        );
      case "increased_quota":
        return (
          <>
            <b>{name}</b> increased <b>{target}</b>'s quota
          </>
        );
      default:
        return <></>;
    }
  };
  return (
    <div className="activity">
      <img className="avatar" src={activity.person.avatar} alt="Avatar" />
      <div className="content">
        <span className="name">
          {generateActionText(
            activity.action,
            activity.person.name,
            activity.target
          )}
        </span>
        <span className="time">{activity.created_at}</span>
      </div>
    </div>
  );
};

export default ActivityCard;
