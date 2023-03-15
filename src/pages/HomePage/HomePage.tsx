import { useState } from "react";
import AddButton from "../../components/AddVersionButton/AddVersionButton.view";
import { NewVersionForm } from "../../components/NewVersionForm/NewVersionForm.container";
import { Versions } from "../../components/Versions/Versions.container";
import "./HomePage.css";

const HomePage = () => {
  const [formFlag, setFormFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);

  const [data, setData] = useState({
    appName: "",
    version: "",
    platform: "",
    forceUpgrade: false,
    flexibleUpgrade: false,
    environment: "",
    updateMessage: "",
  });

  const editVersionHandler = (item: any) => {
    console.log("Edit", item);
    setEditFlag(true);
    setData(item);
    setFormFlag(true);
  };

  const closeForm = () => {
    setFormFlag(false);
    setEditFlag(false);
  };

  const openFormForNewVersion = () => {
    setEditFlag(false);
    setData({
      appName: "",
      version: "",
      platform: "",
      forceUpgrade: false,
      flexibleUpgrade: false,
      environment: "",
      updateMessage: "",
    });
    setFormFlag(true);
  };

  return (
    <div className="wrapper">
      <div className="home-page-container">
        {formFlag ? (
          <NewVersionForm
            closeForm={closeForm}
            setData={setData}
            data={data}
            editFlag={editFlag}
          />
        ) : (
          <div className="versions-view">
            <AddButton
              addNewVersionHandler={() => {
                console.log("ADD NEW VERSION");
                openFormForNewVersion();
              }}
            />
            <Versions editVersionHandler={editVersionHandler} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
