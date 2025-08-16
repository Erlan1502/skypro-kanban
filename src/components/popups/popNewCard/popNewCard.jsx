import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../../../services/tasks';
import { TaskContext } from '../../../context/taskContext/TaskContext';
import { toast } from 'react-toastify';
import * as S from './popNewCard.styled';

const PopNewCard = () => {
  const navigate = useNavigate();
  const { onTaskCreated } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    theme: 'Research',
    status: 'Без статуса',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    title: false,
    description: false,
    date: false,
  });

  const handleClose = () => navigate('/');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleThemeChange = (theme) => {
    setFormData((prev) => ({
      ...prev,
      theme,
    }));
  };

  const handleDateChange = (day) => {
      const newDate = `2023-09-${String(day).padStart(2, '0')}`;
      setFormData((prev) => ({ ...prev, date: newDate }));
      if (validationErrors.date) {
        setValidationErrors(prev => ({ ...prev, date: false }));
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const hasTitleError = !formData.title.trim();
    const hasDescriptionError = !formData.description.trim();
    const hasDateError = !formData.date;

    setValidationErrors({
      title: hasTitleError,
      description: hasDescriptionError,
      date: hasDateError,
    });

    if (hasTitleError || hasDescriptionError || hasDateError) {
      if (hasTitleError) toast.error('Название задачи не может быть пустым.');
      if (hasDescriptionError) toast.error('Заполните описание задачи.');
      if (hasDateError) toast.error('Выберите дату исполнения задачи.');
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
      handleClose();
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
            <S.CloseButton href="#" onClick={handleClose}>
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
                    $error={validationErrors.title}
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
                    $error={validationErrors.description}
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

              <S.CalendarWrapper $error={validationErrors.date}>
                <S.CalendarTitle>Даты</S.CalendarTitle>
                <S.CalendarBlock>
                  <S.CalendarNav>
                    <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
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
                          onClick={() => handleDateChange(day)}
                        >
                          {day}
                        </S.Cell>
                      ))}
                    </S.Cells>
                  </S.CalendarContent>
                  <S.CalendarPeriod>
                    <S.CalendarP>
                      {formData.date
                        ? `Выбрана дата: ${formData.date.split('-').reverse().join('.')}`
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
                form="formNewCard"
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
