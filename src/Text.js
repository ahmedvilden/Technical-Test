import React from "react";

function Text({ field, validate }) {
  return (
    <>
      <label className="review-input-label">
        {field.title} {field.required && <span className="mandatory">*</span>}
      </label>
      <input
        className="review-input"
        id={field.id}
        type={field.type}
        name={field.id}
        required={field.required}
        onInput={validate}
        placeholder={field.title}
      />
    </>
  );
}

export default Text;
