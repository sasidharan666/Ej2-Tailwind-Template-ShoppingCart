import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import React from "react";

function InputTwo(props) {
  return (
    <div className="flex  flex-col md:flex-row md:gap-2   md:justify-between w-[100%] [direction:ltr]">
      <div className="flex flex-col md:w-[50%] ">
        <label htmlFor=" " className="text-left text-sm !text-Gray mb-1  ">
          {props.valueOne}
        </label>
        <div className="flex-1 md:w-full  ">
          <TextBoxComponent
            placeholder={props.valueOne}
            cssClass="!border-2 !border-gray-300 !rounded-sm px-4 text-base"
          />
        </div>
      </div>
      <div className="flex flex-col md:w-[50%]">
        <label htmlFor="" className="text-left text-sm !text-Gray mb-1 ">
          {props.valueTwo}
        </label>
        <div className="flex-1 md:w-full  ">
          <TextBoxComponent
            placeholder={props.valueTwo}
            cssClass="!border-2 !border-gray-300 !rounded-sm px-4 text-base"
          />
        </div>
      </div>
    </div>
  );
}

export default InputTwo;
