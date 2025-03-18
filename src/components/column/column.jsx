import React from "react";
import { CardWebdesign, CardCopywriting, CardResearch } from "../card/card.jsx";
import "./column.css";

const ColumnWOStatus = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <CardWebdesign />
        <CardCopywriting />
        <CardWebdesign />
        <CardCopywriting />
        <CardResearch />
      </div>
    </div>
  );
};
const ColumnNeedToBeDone = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <CardResearch />
      </div>
    </div>
  );
};
const ColumnInWork = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <CardResearch />
        <CardCopywriting />
        <CardWebdesign />
      </div>
    </div>
  );
};
const ColumnTesting = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <CardResearch />
      </div>
    </div>
  );
};
const ColumnReady = ({ title }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards card__title_finished">
        <CardResearch />
      </div>
    </div>
  );
};
export {
  ColumnWOStatus,
  ColumnNeedToBeDone,
  ColumnInWork,
  ColumnTesting,
  ColumnReady,
};
