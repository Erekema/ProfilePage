import React from 'react';
import './StudentInfo.css'; // Создадим этот файл для стилей

const StudentInfo = () => {
  return (
    <div className="table-container">
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
  );
};

export default StudentInfo;