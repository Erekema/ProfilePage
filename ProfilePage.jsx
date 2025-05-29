import React, { useState } from "react";
import StudentTable from './StudentInfo';
import "./style.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Профиль");
  const tabs = ["Профиль"];

  return (
    <>
      <div className="container">
        <div className="profile">
          <div className="profilePic">
            <img src="/1.png" alt="фото студента" />
          </div>
          <div className="profile-name">Лилит Дульян</div>
          <div className="profile-info">
            <div>
              <span className="label">Навыки:</span>
              <span className="value">Java, Python, HTML, CSS</span>
            </div>
            <div>
              <span className="label">Интересы:</span>
              <span className="value">Основной филиал</span>
            </div>
            <div>
              <span className="label">Регион:</span>
              <span className="value">Акмолинская область</span>
            </div>
            <div>
              <span className="label">Город:</span>
              <span className="value">Кокшетау</span>
            </div>
            <div>
              <span className="label">Уровень образования:</span>
              <span className="value">Высшее</span>
            </div>
            <div>
              <span className="label">Предпочитаемый регион работы:</span>
              <span className="value">Кокшетау</span>
            </div>
            <div>
              <span className="label">Пол:</span>
              <span className="value">Женский</span>
            </div>
            <div>
              <span className="label">Возраст:</span>
              <span className="value">20 лет</span>
            </div>
          </div>
        </div>

        <div className="studentInfo">
          <div className="InfoMenu">
            <div className="tabs">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>

            <div className="tabContent">
              {activeTab === "Профиль" && <p></p>}
              
            </div>
            <div className="studentMain"> <StudentTable /></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProfilePage;