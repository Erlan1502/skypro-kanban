import React from "react";
import {
  CalendarWrapper,
  CalendarTitle,
  CalendarBlock,
  CalendarMonth,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarNav,
  NavActions,
  NavAction,
  CalendarPeriod,
  CalendarText,
} from "./calendar.styled.js";

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>Сентябрь 2023</CalendarMonth>
          <NavActions>
            <NavAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <CalendarDaysNames>
            <CalendarDayName>пн</CalendarDayName>
            <CalendarDayName>вт</CalendarDayName>
            <CalendarDayName>ср</CalendarDayName>
            <CalendarDayName>чт</CalendarDayName>
            <CalendarDayName>пт</CalendarDayName>
            <CalendarDayName weekend>сб</CalendarDayName>
            <CalendarDayName weekend>вс</CalendarDayName>
          </CalendarDaysNames>
          <CalendarCells>
            <CalendarCell otherMonth>28</CalendarCell>
            <CalendarCell otherMonth>29</CalendarCell>
            <CalendarCell otherMonth>30</CalendarCell>
            <CalendarCell cellDay>31</CalendarCell>
            <CalendarCell cellDay>1</CalendarCell>
            <CalendarCell cellDay weekend>
              2
            </CalendarCell>
            <CalendarCell cellDay weekend>
              3
            </CalendarCell>
            <CalendarCell cellDay>4</CalendarCell>
            <CalendarCell cellDay>5</CalendarCell>
            <CalendarCell cellDay>6</CalendarCell>
            <CalendarCell cellDay>7</CalendarCell>
            <CalendarCell cellDay current>
              8
            </CalendarCell>
            <CalendarCell cellDay weekend active>
              9
            </CalendarCell>
            <CalendarCell cellDay weekend>
              10
            </CalendarCell>
            <CalendarCell cellDay>11</CalendarCell>
            <CalendarCell cellDay>12</CalendarCell>
            <CalendarCell cellDay>13</CalendarCell>
            <CalendarCell cellDay>14</CalendarCell>
            <CalendarCell cellDay>15</CalendarCell>
            <CalendarCell cellDay weekend>
              16
            </CalendarCell>
            <CalendarCell cellDay weekend>
              17
            </CalendarCell>
            <CalendarCell cellDay>18</CalendarCell>
            <CalendarCell cellDay>19</CalendarCell>
            <CalendarCell cellDay>20</CalendarCell>
            <CalendarCell cellDay>21</CalendarCell>
            <CalendarCell cellDay>22</CalendarCell>
            <CalendarCell cellDay weekend>
              23
            </CalendarCell>
            <CalendarCell cellDay weekend>
              24
            </CalendarCell>
            <CalendarCell cellDay>25</CalendarCell>
            <CalendarCell cellDay>26</CalendarCell>
            <CalendarCell cellDay>27</CalendarCell>
            <CalendarCell cellDay>28</CalendarCell>
            <CalendarCell cellDay>29</CalendarCell>
            <CalendarCell cellDay weekend>
              30
            </CalendarCell>
            <CalendarCell otherMonth weekend>
              1
            </CalendarCell>
          </CalendarCells>
        </CalendarContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <CalendarPeriod>
          <CalendarText>
            Выберите срок исполнения <span className="date-control"></span>.
          </CalendarText>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarWrapper>
  );
};

export default Calendar;
