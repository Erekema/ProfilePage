import React, { useState } from "react";
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

            <div className="tabContent">
              {activeTab === "Профиль" && <p></p>}
              
            </div>
            <div className="studentMain"> <div className="table-container">
      <table className="student-table">
        <tbody>
            <div className="parents-section">
        <h4>Меня Зовут Ерсултан, я выпускник Высшего Технического колледжа ищу свой Карьерный путь</h4>
      </div>
          <tr className="highlighted-row">
            <td><strong>Информация о студенте</strong></td>
            
          </tr>
          <tr>
            <td>Фамилия:</td>
            <td>Омаров</td>
          </tr>
          <tr>
            <td>Имя:</td>
            <td>Ерсултан</td>
          </tr>
          <tr>
            <td>Отчество:</td>
            <td>Асылбекович</td>
          </tr>
          <tr>
            <td>Почта:</td>
            <td>ersultan.omarov.06@mail.ru</td>
          </tr>
          <tr>
            <td>Телефон:</td>
            <td>+7 (777) 308 6793</td>
          </tr>
          <tr>
            <td>Уровень образования:</td>
            <td>Среднее</td>
          </tr>
          <tr>
            <td>Место обучения</td>
            <td>ВТК г.Кокшетау</td>
          </tr>
          <tr>
            <td>Профессия</td>
            <td></td>
          </tr>
          <tr>
            <td>Предпочитаемый регион работы</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>

          </tr>
          <tr className="highlighted-row">
            <td><strong>Дополнительная информация</strong></td>
          </tr>
          <tr>
            <td>Интересы</td>
            <td>Люблю разрабатывать коды для сайтов</td>
          </tr>
          <tr>
            <td>Навыки</td>
            <td>Java, Python</td>
          </tr>
        </tbody>
      </table>

      
    </div>
    </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProfilePage;