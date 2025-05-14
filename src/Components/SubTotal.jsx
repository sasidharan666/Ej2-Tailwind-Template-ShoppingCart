import React from "react";

function SubTotal() {
  return (
    <div className="bg-Subtotal p-3 mt-6 mb-5">
      <div className="flex justify-between  text-base flex-col">
        <div className="separator flex justify-between  text-base flex-row-reverse">
          <ul className="text-left text-Gray ">
            <li className="mb-6">Subtotal</li>
            <li className="mb-6">Savings</li>
            <li className="mb-6">Store pickup</li>
            <li className="">Tax</li>
          </ul>
          <ul className="font-semibold">
            <li className="mb-6">$8,900.00</li>
            <li className="mb-6">
              <span className="text-CreditGreen inline-block "> $299.00-</span>
            </li>
            <li className="mb-6">$99.00</li>
            <li className="">$899.00</li>
          </ul>
        </div>
        <span className="border-t-1 sm:border-t-0 border-gray-300 mb-3 mt-3"></span>
        <ul className="flex flex-row-reverse justify-between">
          <li className="text-Gray font-semibold"> Total</li>
          <li className="font-semibold">$9599.00</li>
        </ul>
      </div>
      <div className="cart_prices"></div>
    </div>
  );
}

export default SubTotal;
