import "../App.css";
import TeamCard from "./teamCard/teamCard";

const toggleFavorites = (id) => {
  alert("toggle favorites: " + id);
};

const Teams = ({ teams, count }) => {
  return (
    <div className="content-wrapper all-teams">
      <div className="content-title">
        <span className="title">All Teams</span>
        <span className="note">
          Showing {teams.length} out of {count} teams
        </span>
      </div>
      <div className="content-main">
        {teams.length > 0
          ? teams.map((team) => (
              <TeamCard
                onToggleFavorites={() => toggleFavorites(team.id)}
                team={team}
                key={"team" + team.id}
              />
            ))
          : "Nothing To Show"}
      </div>
    </div>
  );
};

export default Teams;
