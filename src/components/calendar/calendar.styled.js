import styled from "styled-components";

export const SCalendar = styled.div`
  .calendar {
    width: 182px;
    margin-bottom: 20px;
  }

  .calendar__ttl {
    margin-bottom: 14px;
    padding: 0 7px;
  }

  .calendar__p {
    color: #94a6be;
    font-size: 10px;
    line-height: 1;
  }

  .calendar__p span {
    color: #000000;
  }

  .calendar__block {
    display: block;
  }

  .calendar__month {
    color: #94a6be;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }

  .calendar__content {
    margin-bottom: 12px;
  }

  .calendar__days-names {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
  }

  .calendar__day-name {
    color: #94a6be;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
  }

  .calendar__cells {
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
  }

  .calendar__cell {
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94a6be;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
  }

  .calendar__nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;
  }

  .calendar__period {
    padding: 0 7px;
  }

  .nav__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav__action {
    width: 18px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav__action svg {
    fill: #94a6be;
  }

  ._other-month {
    opacity: 0;
  }

  ._cell-day:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }

  ._active-day {
    background-color: #94a6be;
    color: #ffffff;
  }

  ._current {
    font-weight: 700;
  }
`;
