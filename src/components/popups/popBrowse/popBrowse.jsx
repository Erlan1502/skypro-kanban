import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTask, updateTask } from '../../../services/tasks';
import { TaskContext } from '../../../context/taskContext/TaskContext';
import { toast } from 'react-toastify';
import './popBrowse.css';
const themeColors = {
  orange: '#FFE4C2',
  purple: '#E9D4FF',
  green: '#B4FDD1',
};

const StyledCardTheme = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  background-color: ${({ $color }) => themeColors[$color] || '#EEE'};
  p {
    color: ${({ $color }) =>
      $color === 'orange'
        ? '#FF6D00'
        : $color === 'purple'
        ? '#9A48F1'
        : '#06B16E'};
    font-size: 14px;
    font-weight: 600;
    line-height: 10px;
  }
`;

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, onDelete, onTaskUpdate } = useContext(TaskContext);

  const [task, setTask] = useState(null);
  const [isOnChange, setIsOnChange] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    status: '',
  });

  useEffect(() => {
    const currentTask = tasks.find((t) => t._id === id);
    if (currentTask) {
      setTask(currentTask);
      setFormData({
        title: currentTask.title,
        description: currentTask.description,
        date: currentTask.date,
        status: currentTask.status,
      });
    }
  }, [id, tasks]);

  const handleClose = () => navigate('/');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStatusChange = (newStatus) => {
    setFormData((prev) => ({
      ...prev,
      status: newStatus,
    }));
  };

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      onDelete(id);
      toast.success('Задача успешно удалена!');
      handleClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const updatedTaskData = {
        title: formData.title,
        description: formData.description,
        date: formData.date,
        topic: task.topic,
        status: formData.status,
      };
      const updatedTaskResponse = await updateTask(id, updatedTaskData);
      if (onTaskUpdate) onTaskUpdate(updatedTaskResponse);
      toast.success('Задача успешно обновлена!');
      handleClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!task) {
    return <div>Загрузка задачи...</div>;
  }

  let themeColor = '';
  if (task.topic === 'Web Design') {
    themeColor = 'orange';
  } else if (task.topic === 'Copywriting') {
    themeColor = 'purple';
  } else if (task.topic === 'Research') {
    themeColor = 'green';
  }

  return (
    <div className="pop-browse-overlay">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <StyledCardTheme $color={themeColor}>
                <p>{task.topic}</p>
              </StyledCardTheme>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              {isOnChange ? (
                <div className="status__themes">
                  {[
                    'Без статуса',
                    'Нужно сделать',
                    'В работе',
                    'Тестирование',
                    'Готово',
                  ].map((s) => (
                    <div
                      key={s}
                      className={`status__theme ${
                        formData.status === s ? 'status__theme--active' : ''
                      }`}
                      onClick={() => handleStatusChange(s)}
                    >
                      <p>{s}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="status__themes">
                  <div className="status__theme _gray">
                    <p className="_gray">{task.status}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                onSubmit={handleSubmit}
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className={`form-browse__area ${isOnChange ? 'white' : ''}`}
                    name="description"
                    id="textArea01"
                    readOnly={!isOnChange}
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__period">
                  <p className="calendar__p date-end">
                    Срок исполнения:{' '}
                    <span className="date-control">
                      {new Date(formData.date).toLocaleDateString('ru-RU')}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                {!isOnChange ? (
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={() => setIsOnChange(true)}
                  >
                    Редактировать задачу
                  </button>
                ) : (
                  <>
                    <button
                      type="submit"
                      form="formBrowseCard"
                      className="btn-browse__save _btn-bg _hover01"
                    >
                      Сохранить
                    </button>
                    <button
                      type="button"
                      className="btn-browse__cancel _btn-bor _hover03"
                      onClick={() => setIsOnChange(false)}
                    >
                      Отменить
                    </button>
                  </>
                )}
                <button
                  type="button"
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDelete}
                >
                  Удалить задачу
                </button>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="btn-browse__close _btn-bg _hover01"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
