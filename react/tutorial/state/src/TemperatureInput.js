import React from 'react';

const scaleNames = {
  c: '섭씨(Celsius)',
  f: '화씨(Fahrenheit)',
};

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  return (
    <fieldset className="temp-input-wrap">
      <legend className="temp-title">
        {scaleNames[scale]} 온도를 입력하세요:
      </legend>
      <input
        className="temp-input"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
};

export default TemperatureInput;
