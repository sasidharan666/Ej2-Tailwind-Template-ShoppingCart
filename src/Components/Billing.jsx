import {
  Button,
  ButtonComponent,
  CheckBoxComponent,
  RadioButtonComponent,
} from "@syncfusion/ej2-react-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import React from "react";

import InputTwo from "./InputTwo";
import {
  MaskedTextBoxComponent,
  TextArea,
  TextBoxComponent,
} from "@syncfusion/ej2-react-inputs";

function Billing() {
  const Address = ["no 6,shanmuga", "no 7 vela street"];
  const City = ["Chennai", "Mumbai"];
  const Country = ["India", "USA"];
  const Codes = ["+91", "+23"];


  return (
    <div>
      <h1 className="text-lg text-left mb-4 font-medium">Billing address</h1>
      <div className="address ">
        <div className="flex flex-row-reverse items-center ">
          <RadioButtonComponent
            className="text-base"
            label=" "
            name="custom"
            id="order"
            cssClass="custom-radio"
            checked={true}
          />
          <label htmlFor="order" className="text-base mt-0.5 ">
            Order as company
          </label>
        </div>
      </div>

      <div className="">
        <div className=" flex  flex-col ">
          <div className="flex flex-col mb-5 mt-5">
            <span className="inline-block text-left  text-sm !text-Gray mb-1 font-medium [direction:ltr]" >
              Saved address
            </span>
            <div className="">
              <DropDownListComponent
                id="ddlelement"
                dataSource={Address}
                placeholder="Saved address"
                cssClass="e-plain !border-2 !border-gray-300 !rounded-sm px-4 text-base [direction:ltr]"
              />
            </div>
          </div>

          <div className="two_input mb-5">
            <InputTwo valueOne={"First name"} valueTwo={"Last name"} />
          </div>

          <div className="mobile_number flex flex-col mb-5 ">
            <h1 className="text-sm text-left !text-Gray mb-1 font-medium">
              Phone number
            </h1>
            <div className="flex flex-row-reverse gap-2 items-center md:w-full">
              <div className="country_code  w-20 md:w-20 md:mr-2 [direction:ltr]">
                <DropDownListComponent
                  id="ddlelement"
                  dataSource={Codes}
                  placeholder="+91"
                  cssClass=" !border-2 !border-gray-300 !rounded-sm px-2 "
                />
              </div>
              <div className="flex-1   [direction:ltr] md:w-[100%]">
                <MaskedTextBoxComponent
                  id="phone"
                  mask="000-000-0000"
                  placeholder="000 000 0000"
                  value=""
                  cssClass="e-plain !border-2 !border-gray-300 !rounded-sm px-4 md:w-full text-base  "
                />
              </div>
            </div>
          </div>

          <div className="shipping_address flex flex-col mb-5">
            <span className="inline-block text-left text-sm !text-Gray mb-1 font-medium">
              Shopping address
            </span>
            <div className="text_area [direction:ltr] ">
              <TextBoxComponent
                placeholder=" Shipping address"
                multiline={true}
                rows={4}
                cssClass="!border-2 !border-gray-300 !rounded-sm px-4 text-base "
              />
            </div>
          </div>

          <div className="flex  flex-col md:flex-row md:gap-2   md:justify-between md:w-[100%] ">
            <div className="flex flex-col mb-5 md:w-[50%] [direction:ltr]">
              <span className="inline-block text-left text-sm !text-Gray mb-1 font-medium">
                City              </span>
              <div className=" md:w-full">
                <DropDownListComponent
                  id="ddlelement"
                  dataSource={City}
                  placeholder="City"
                  cssClass="e-plain !border-2 !border-gray-300 !rounded-sm px-4 text-base "
                />
              </div>
            </div>

            <div className="flex flex-col md:w-[50%] [direction:ltr]">
              <span className="inline-block text-left text-sm !text-Gray mb-1 font-medium">
                Country
              </span>
              <div className=" md:w-full">
                <DropDownListComponent
                  id="ddlelement"
                  dataSource={Country}
                  placeholder="Country"
                  cssClass="e-plain !border-2 !border-gray-300 !rounded-sm px-4 text-base "
                />
              </div>
            </div>
          </div>

          <div className="save_adress_check_box flex flex-col mt-6">
            <div className=" flex flex-row-reverse items-center gap-2 ">
              <div className="text-left">
                <CheckBoxComponent label="" name="checkbox" id="check" />
              </div>
              <label htmlFor="check" className="inline-block text-base">
                Save the data in the address list
              </label>
            </div>
          </div>

          




          <div className="delivery_payemnt">
 <div className="delivery_payment">
  <h1 className="text-left !text-customGray mt-6 mb-4 !text-lg font-medium">
    Delivery address
  </h1>

  {/* Option 1: Same Address */}
  <div className="address mb-4">
    <div className="flex items-start  gap-6  mb-4 rounded" dir="ltr">
      <RadioButtonComponent
        label=""
        name="delivery"
        id="sameaddress"
        enableRtl={false}
        className="text-base"
        checked={true}
      />
      <label
        htmlFor="sameaddress"
        className="text-base mt-0.5 cursor-pointer "
      >
        Delivery to the same address
      </label>
    </div>
  </div>

  {/* Option 2: Another Address */}
  <div className="address mb-4">
    <div className="flex items-start gap-6  mb-4 rounded" dir="ltr">
      <RadioButtonComponent
        label=""
        name="delivery"
        id="anotheraddress"
        enableRtl={false}
        className="text-base"
      />
      <label
        htmlFor="anotheraddress"
        className="text-base mt-0.5 cursor-pointer "
      >
        Delivery to another address
      </label>
    </div>
  </div>

  {/* Option 3: Store Pickup */}
  <div className="address mb-4">
    <div className="flex items-start  gap-6 mb-4 rounded" dir="ltr">
      <RadioButtonComponent
        label=""
        name="delivery"
        id="storepickup"
        enableRtl={false}
        className="text-base"
      />
      <label
        htmlFor="storepickup"
        className="text-base mt-0.5 cursor-pointer "
      >
        Store pickup
      </label>
    </div>
  </div>
</div>
{/* Payment Ways */}
<div className="payment_mode mt-6">
  <h1 className="text-left !text-customGray mb-4 !text-lg font-medium">
    Payment details
  </h1>

  {/* Option 1: Online with bank card */}
  <div className="flex items-start  gap-6 mb-4 rounded mb-4" dir="ltr">
    <RadioButtonComponent
      label=""
      name="payment"
      id="bankcard"
      enableRtl={false}
      className="text-base"
      checked={true}
    />
    <label
      htmlFor="bankcard"
      className="text-base mt-0.5 cursor-pointer "
    >
      Online with bank card
    </label>
  </div>

  {/* Option 2: Credit Card */}
  <div className="flex items-start  gap-6  mb-4 rounded mb-4" dir="ltr">
    <RadioButtonComponent
      label=""
      name="payment"
      id="creditcard"
      enableRtl={false}
      className="text-base"
    />
    <label
      htmlFor="creditcard"
      className="text-base mt-0.5 cursor-pointer "
    >
      Credit card
    </label>
  </div>

  {/* Option 3: Net Banking */}
  <div className="flex items-start  gap-6 mb-4 rounded mb-4" dir="ltr">
    <RadioButtonComponent
      label=""
      name="payment"
      id="netbanking"
      enableRtl={false}
      className="text-base"
    />
    <label
      htmlFor="netbanking"
      className="text-base mt-0.5 cursor-pointer "
    >
      Net banking
    </label>
  </div>

  {/* Option 4: UPI Transaction */}
  <div className="flex items-start  gap-6 mb-4 rounded" dir="ltr">
    <RadioButtonComponent
      label=""
      name="payment"
      id="upi"
      enableRtl={false}
      className="text-base"
    />
    <label
      htmlFor="upi"
      className="text-base mt-0.5 cursor-pointer "
    >
      UPI transaction
    </label>
  </div>
</div>









            {/* End of delivery & Payment way */}
          </div>

          <div className="buttons flex flex-col items-center md:flex-row-reverse md:items-center   mt-8 mb-2">
            <ButtonComponent cssClass="e-link !capitalize !p-2.5 !rounded-sm hover:!no-underline click:!no-underline focus:!no-underline !text-white w-72 mb-4 md:mb-0 mr-4 !bg-Purple">
              Proceed to checkout
            </ButtonComponent>
            <ButtonComponent cssClass="e-link !capitalize !p-2.5 !rounded-sm hover:!no-underline click:!no-underline !border-2 w-72 md:mb-0  focus:!no-underline !border-gray-300 !rounded-sm !text-Gray mb-7">
              Continue shopping
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
