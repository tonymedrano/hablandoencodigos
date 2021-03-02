import React from 'react';
import './select.scss';

const Select = ({ options = [], onChange, selected }: any) => {
  const renderOptions = () => {
    return options.map(({ value, label }: any) => {
      return (
        <option key={value} value={value}>
          {label}
        </option>
      );
    });
  };

  return (
    <select
      value={selected}
      onChange={event => {
        onChange(event.currentTarget.value);
      }}
    >
      {renderOptions()}
    </select>
  );
};

export default Select;
