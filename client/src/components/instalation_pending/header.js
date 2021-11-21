import React from "react";
import { FormattedMessage } from "react-intl";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const MyHeader = (props) => {
  return (
    <header className="header--search">
      <div className="box-header left">
        <i className="fas fa-search"></i>
        <FormattedMessage id="Search1">
          {(msg) => (
            <input
              defaultValue={props.search}
              onChange={props.handleSearch}
              type="text"
              className="input-search"
              placeholder={msg}
            />
          )}
        </FormattedMessage>
      </div>
      <div className="box-header left">
        <i className="far fa-calendar-alt"></i>
        <FormattedMessage id="From">
          {(msg) => (
            <DatePicker
              placeholderText={msg}
              className="dateInput"
              dateFormat="dd-MM-yyyy"
              selected={props.startDate}
              onChange={(date) => {
                props.handleDateStart(date);
              }}
            />
          )}
        </FormattedMessage>
      </div>
      <div className="box-header left">
        <i className="far fa-calendar-alt"></i>
        <FormattedMessage id="To">
          {(msg) => (
            <DatePicker
              placeholderText={msg}
              className="dateInput"
              dateFormat="dd-MM-yyyy"
              selected={props.endDate}
              onChange={(date) => {
                props.handleDateEnd(date);
              }}
            />
          )}
        </FormattedMessage>
      </div>
    </header>
  );
};

export default MyHeader;
