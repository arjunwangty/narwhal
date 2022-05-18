import "../App.css";
import ActivityCard from "./activityCard/activityCard";

const Activities = ({ activities }) => {
  return (
    <div className="content-wrapper all-activities">
      <div className="content-title">
        <span className="title">Activity</span>
      </div>
      <div className="content-main">
        {activities.length > 0
          ? activities.map((activity) => (
              <ActivityCard
                key={"activity" + activity.id}
                activity={activity}
              />
            ))
          : "Nothing To Show"}
      </div>
    </div>
  );
};

export default Activities;
