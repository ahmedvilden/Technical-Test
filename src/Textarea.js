import React from "react";

function Textarea({ field, validate }) {
  return (
    <>
      <label className="review-input-label">
        {field.title} {field.required && <span className="mandatory">*</span>}
      </label>
      <textarea
        className="review-input"
        id={field.id}
        name={field.id}
        required={field.required}
        onInput={validate}
        placeholder={field.title}
      ></textarea>
    </>
  );
}

export default Textarea;
