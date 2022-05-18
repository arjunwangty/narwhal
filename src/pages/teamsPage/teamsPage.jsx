import "./teamsPage.css";
import data from "../../data.json";
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Row, Col } from "antd";
import Header from "../../components/header/header";
import Teams from "../../components/teams";
import Activities from "../../components/activities";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [filter, setFilter] = useState("");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    /*
    const fetchData = async ()=> {
      const result = await axios(
        '/api/xxxxx',
      );
      setTeams(result.data.teams);
      setTeams(result.data.activities)
    }
    instead, data is directly imported from file to simulate API response.
    */
    setTeams(data.teams);
    setActivities(data.activities);
    setFilter("");
  }, []);

  const handleSearch = (value) => {
    setFilter(value);
  };

  const getFavorites = (teams) => {
    if (!teams) return [];
    const filtered = teams.filter((team) => {
      return team.is_favorited;
    });
    return filtered;
  };

  const getArchived = (teams) => {
    if (!teams) return [];
    const filtered = teams.filter((team) => {
      return team.is_archived;
    });
    return filtered;
  };

  const filterTeams = () => {
    if (!teams) return [];
    const filtered = teams.filter((team) => {
      if (filter.trim() === "") return true;
      const name = team.name.toLowerCase();
      return name.includes(filter.toLowerCase());
    });
    return filtered;
  };

  return (
    <div>
      <Header onSearch={(keyWord) => handleSearch(keyWord)} />
      <Row className="panel" gutter={[16, 16]}>
        <Col xs={24} sm={24} md={14} lg={18}>
          <Routes>
            <Route path="*" element={<Navigate to="all" replace />} />
            <Route
              path="all"
              element={<Teams teams={filterTeams()} count={teams.length} />}
            />
            <Route
              path="favorites"
              element={
                <Teams
                  teams={getFavorites(filterTeams())}
                  count={teams.length}
                />
              }
            />
            <Route
              path="archived"
              element={
                <Teams
                  teams={getArchived(filterTeams())}
                  count={teams.length}
                />
              }
            />
          </Routes>
        </Col>
        <Col xs={24} sm={24} md={10} lg={6}>
          <Activities activities={activities} />
        </Col>
      </Row>
    </div>
  );
};

export default TeamsPage;
