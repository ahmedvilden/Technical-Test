import React from "react";
import { useState } from "react";
import Data from "./data.json";
import Select from "./Select";
import Text from "./Text";
import Textarea from "./Textarea";
import "./Review.css";

function Review() {
  const [idx, setIdx] = useState(0);
  const [valid, set_valid] = useState(false);
  const selector = Data["review-types"];
  const check_empty = (val) => {
    var empty = true;
    selector[val].fields.map((field) => {
      if (field.required) {
        empty = false;
        return;
      }
    });
    set_valid(empty);
  };
  const handleForm = (e) => {
    const val = e.target.selectedIndex;
    setIdx(val);
    check_empty(val);
  };
  const validate = () => {
    var validity = true;
    const ips = document.querySelectorAll(".review-input");
    ips.forEach((ip) => {
      if (!ip.value && ip.hasAttribute("required")) {
        validity = false;
        return;
      }
    });
    set_valid(validity);
  };
  const sendData = () => {
    var obj = {};
    obj["id"] = selector[idx].id;
    obj["title"] = selector[idx].title;
    obj["data"] = {};
    const ips = document.querySelectorAll(".review-input");
    ips.forEach((ip, i) => {
      if (i > 0) obj["data"][ip.id] = ip.value;
    });
    console.log(obj);
    set_valid(false);
  };
  return (
    <div className={`review ${valid && `valid`}`}>
      <div className="review-header">
      <b className="form-title">New Review</b>
      <input
        className="submit-btn"
        type="submit"
        value="Done"
        disabled={!valid}
        onClick={sendData}
      />
      </div>
      <hr />
      <form className="review-form">
        <Select selector={selector} parent handleForm={handleForm} idx={idx} />
        {selector[idx].fields?.map((field) => {
          if (field.type == "select")
            return (
              <Select key={field.id} selector={field} validate={validate} />
            );
          else if (field.type == "text")
            return <Text key={field.id} field={field} validate={validate} />;
          else if (field.type == "textarea")
            return (
              <Textarea key={field.id} field={field} validate={validate} />
            );
        })}
      </form>      
    </div>
  );
}

export default Review;
