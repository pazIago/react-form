import React from "react";

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;
  return (
    <fieldset className="flex flex-col p-4 border-2 border-slate-200">
      <legend className="text-lg font-medium">{pergunta}</legend>
      {options.map((option) => {
        return (
          <label key={option} className={`mb-2`}>
            <input
              type="radio"
              id={id}
              value={option}
              checked={value === option}
              onChange={onChange}
              className={`mr-2`}
            />
            {option}
          </label>
        );
      })}
    </fieldset>
  );
};

export default Radio;
