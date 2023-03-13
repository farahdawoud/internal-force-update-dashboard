import React, { useState } from "react";
import AddButton from "../../components/AddVersionButton/AddVersionButton.view";
import { AddVersionForm } from "../../components/NewVersionForm/NewVersionForm.container";
import { Versions } from "../../components/Versions/Versions.container";
import "./HomePage.css";

const HomePage = () => {
  const [formFlag, setFormFlag] = useState(false);

  return (
    <div className="wrapper">
      <div className="home-page-container">
        {formFlag ? (
          <AddVersionForm setFormFlag={setFormFlag} />
        ) : (
          <div className="versions-view">
            <AddButton
              addNewVersionHandler={() => {
                console.log("ADD");
                setFormFlag(true);
              }}
            />
            <Versions />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
