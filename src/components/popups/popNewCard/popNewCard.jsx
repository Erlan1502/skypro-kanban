import React, { useContext, useState } from "react";
import "./popNewCard.css";
import { createTask } from "../../../services/tasks";
import { TaskContext } from "../../../context/taskContext/TaskContext";
const PopNewCard = ({ onClose }) => {
  const { onTaskCreated } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    title: "Новая задача",
    description: "",
    date: "",
    theme: "Research",
    status: "Без статуса",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleThemeChange = (theme) => {
    setFormData((prev) => ({
      ...prev,
      theme,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const newTask = await createTask({
        title: formData.title,
        description: formData.description,
        date: formData.date,
        topic: formData.theme,
        status: formData.status,
      });

      if (onTaskCreated) onTaskCreated(newTask);

      setFormData({
        title: "Новая задача",
        description: "",
        date: "",
        theme: "Research",
        status: "Без статуса",
      });

      if (onClose) onClose();
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close" onClick={onClose}>
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                onSubmit={handleSubmit}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="pop-new-card__calendar calendar">
                  <p className="calendar__ttl subttl">Даты</p>
                  <div className="calendar__block">
                    <div className="calendar__nav">
                      <div className="calendar__month">Сентябрь 2023</div>
                      <div className="nav__actions">
                        <div className="nav__action" data-action="prev">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="11"
                            viewBox="0 0 6 11"
                          >
                            <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                          </svg>
                        </div>
                        <div className="nav__action" data-action="next">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="11"
                            viewBox="0 0 6 11"
                          >
                            <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="calendar__content">
                      <div className="calendar__days-names">
                        <div className="calendar__day-name">пн</div>
                        <div className="calendar__day-name">вт</div>
                        <div className="calendar__day-name">ср</div>
                        <div className="calendar__day-name">чт</div>
                        <div className="calendar__day-name">пт</div>
                        <div className="calendar__day-name -weekend-">сб</div>
                        <div className="calendar__day-name -weekend-">вс</div>
                      </div>
                      <div className="calendar__cells">
                        {[
                          28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                          13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                          26, 27, 28, 29, 30, 1,
                        ].map((day, index) => (
                          <div
                            key={index}
                            className={`calendar__cell 
                  ${index < 3 || index > 33 ? "_other-month" : "_cell-day"} 
                  ${(index - 3) % 7 >= 5 ? "_weekend" : ""} 
                  ${day === 8 ? "_current" : ""}`}
                            onClick={() => {
                              const newDate = `${day
                                .toString()
                                .padStart(2, "0")}.09.2023`;
                              setFormData((prev) => ({
                                ...prev,
                                date: newDate,
                              }));
                              document.getElementById("datepick_value").value =
                                newDate;
                            }}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                    </div>
                    <input
                      type="hidden"
                      id="datepick_value"
                      value={formData.date || "08.09.2023"}
                    />
                    <div className="calendar__period">
                      <p className="calendar__p date-end">
                        {formData.date
                          ? `Выбрана дата: ${formData.date}`
                          : "Выберите срок исполнения"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pop-new-card__categories categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__themes">
                    <div
                      className={`categories__theme _orange ${
                        formData.theme === "Web Design"
                          ? "_active-category"
                          : ""
                      }`}
                      onClick={() => handleThemeChange("Web Design")}
                    >
                      <p className="_orange">Web Design</p>
                    </div>
                    <div
                      className={`categories__theme _green ${
                        formData.theme === "Research" ? "_active-category" : ""
                      }`}
                      onClick={() => handleThemeChange("Research")}
                    >
                      <p className="_green">Research</p>
                    </div>
                    <div
                      className={`categories__theme _purple ${
                        formData.theme === "Copywriting"
                          ? "_active-category"
                          : ""
                      }`}
                      onClick={() => handleThemeChange("Copywriting")}
                    >
                      <p className="_purple">Copywriting</p>
                    </div>
                  </div>
                </div>

                <div className="form-new__create-block">
                  <button
                    type="submit"
                    className="form-new__create _hover01"
                    id="btnCreate"
                  >
                    Создать задачу
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;
