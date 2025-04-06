import React from "react";
import "./popUser.css";
import { useNavigate } from "react-router-dom";

const PopUser = () => {
  const navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    navigate("/exit");
  };
  return (
    <div className="pop-user-set" id="user-set-target">
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <button type="button" className="_hover03" onClick={handleLogoutClick}>
        Выйти
      </button>
    </div>
  );
};

export default PopUser;
