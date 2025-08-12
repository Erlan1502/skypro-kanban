import React, { useContext, useState } from 'react';
import { createTask } from '../../../services/tasks';
import { TaskContext } from '../../../context/taskContext/TaskContext';
import { toast } from 'react-toastify';
import * as S from './popNewCard.styled';

const PopNewCard = ({ onClose }) => {
  const { onTaskCreated } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    title: 'Новая задача',
    description: '',
    date: '',
    theme: 'Research',
    status: 'Без статуса',
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
    if (!formData.title.trim()) {
      toast.error('Название задачи не может быть пустым.');
      return;
    }
    if (!formData.description.trim()) {
      toast.error('Заполните описание задачи.');
      return;
    }
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
      toast.success('Задача успешно создана!');
      setFormData({
        title: 'Новая задача',
        description: '',
        date: '',
        theme: 'Research',
        status: 'Без статуса',
      });

      if (onClose) onClose();
    } catch (error) {
      toast.error(error.message || 'Не удалось создать задачу.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calendarDays = [
    28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1,
  ];

  return (
    <S.PopNewCardWrapper>
      <S.Container>
        <S.Block>
          <S.Content>
            <S.ModalTitle>Создание задачи</S.ModalTitle>
            <S.CloseButton href="#" onClick={onClose}>
              &#10006;
            </S.CloseButton>
            <S.Wrap>
              <S.StyledForm id="formNewCard" onSubmit={handleSubmit}>
                <S.FormBlock>
                  <S.SubTitle htmlFor="formTitle">Название задачи</S.SubTitle>
                  <S.FormInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </S.FormBlock>

                <S.FormBlock>
                  <S.SubTitle htmlFor="textArea">Описание задачи</S.SubTitle>
                  <S.FormTextArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleChange}
                  ></S.FormTextArea>
                </S.FormBlock>

                <S.CategoriesWrapper>
                  <S.CategoriesP>Категория</S.CategoriesP>
                  <S.CategoriesThemes>
                    <S.CategoryTheme
                      $color="#FFE4C2"
                      $textColor="#FF6D00"
                      $isActive={formData.theme === 'Web Design'}
                      onClick={() => handleThemeChange('Web Design')}
                    >
                      <p>Web Design</p>
                    </S.CategoryTheme>
                    <S.CategoryTheme
                      $color="#B4FDD1"
                      $textColor="#06B16E"
                      $isActive={formData.theme === 'Research'}
                      onClick={() => handleThemeChange('Research')}
                    >
                      <p>Research</p>
                    </S.CategoryTheme>
                    <S.CategoryTheme
                      $color="#E9D4FF"
                      $textColor="#9A48F1"
                      $isActive={formData.theme === 'Copywriting'}
                      onClick={() => handleThemeChange('Copywriting')}
                    >
                      <p>Copywriting</p>
                    </S.CategoryTheme>
                  </S.CategoriesThemes>
                </S.CategoriesWrapper>
              </S.StyledForm>

              <S.CalendarWrapper>
                <S.CalendarTitle>Даты</S.CalendarTitle>
                <S.CalendarBlock>
                  <S.CalendarNav>
                    <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
                    <S.NavActions>
                      <S.NavAction data-action="prev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </S.NavAction>
                      <S.NavAction data-action="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="11"
                          viewBox="0 0 6 11"
                        >
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </S.NavAction>
                    </S.NavActions>
                  </S.CalendarNav>
                  <S.CalendarContent>
                    <S.DayNames>
                      <S.DayName>пн</S.DayName>
                      <S.DayName>вт</S.DayName>
                      <S.DayName>ср</S.DayName>
                      <S.DayName>чт</S.DayName>
                      <S.DayName>пт</S.DayName>
                      <S.DayName className="-weekend-">сб</S.DayName>
                      <S.DayName className="-weekend-">вс</S.DayName>
                    </S.DayNames>
                    <S.Cells>
                      {calendarDays.map((day, index) => (
                        <S.Cell
                          key={index}
                          $isOtherMonth={index < 4 || index > 33}
                          $isCurrent={day === 8}
                          $isActive={
                            formData.date ===
                            `${String(day).padStart(2, '0')}.09.2023`
                          }
                          onClick={() => {
                            const newDate = `${String(day).padStart(
                              2,
                              '0'
                            )}.09.2023`;
                            setFormData((prev) => ({ ...prev, date: newDate }));
                          }}
                        >
                          {day}
                        </S.Cell>
                      ))}
                    </S.Cells>
                  </S.CalendarContent>
                  <S.CalendarPeriod>
                    <S.CalendarP>
                      {formData.date
                        ? `Выбрана дата: ${formData.date}`
                        : 'Выберите срок исполнения'}
                    </S.CalendarP>
                  </S.CalendarPeriod>
                </S.CalendarBlock>
              </S.CalendarWrapper>
            </S.Wrap>
            <div>
              <S.CreateButton
                type="submit"
                id="btnCreate"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Создание...' : 'Создать задачу'}
              </S.CreateButton>
            </div>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.PopNewCardWrapper>
  );
};

export default PopNewCard;
