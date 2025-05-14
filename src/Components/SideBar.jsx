import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import * as React from "react";
import SubTotal from "./SubTotal";
import Billing from "./Billing";
import Samsung from "../assets/samsung.jpg"
function SideBar() {
  let [flag, setFlag] = React.useState(false);
  let sidebarObj;
  let type = "Push";
  function onCreate() {
    sidebarObj.element.style.visibility = "";
  }

  function toggleClick() {
    setFlag(!flag);
    sidebarObj.toggle();
  }

  function closeClick() {
    sidebarObj.hide();
  }
  return (
    <div className="">
      <div id="wrapper " className="mt-30 ">
        <div className="bg-CreditGreen  p-5 w-fit text-white justify-center m-auto  flex-col items-center ">
          <img src={Samsung}/>
          <div className="title">Samsung S25 Ultra</div>
          <div className="sub-title">AI revolution with GalaxyAI</div>
          <div className="center-align">
            <ButtonComponent
              onClick={toggleClick}
              id="toggle"
              className="e-btn e-warning"
            >
              {flag ? "No Need " : "Buy Now"}
            </ButtonComponent>
          </div>
        </div>
        <div className="!bg-BG text-black box-border w-140">
          <SidebarComponent
            id="default-sidebar"
            className="!w-full sm:!w-[35%] !px-4 py-6"
            position="Right"
            enableRtl={true}
            animate={true}
            type={type}
            ref={(Sidebar) => (sidebarObj = Sidebar)}
            created={onCreate}
            style={{ visibility: "hidden" }}
          >
            <div className="flex flex-row-reverse justify-between items-center">
              <h2 className="text-xl font-medium">My Shopping Cart</h2>
              <div className="center-align">
                <button
                  onClick={closeClick}
                  id="close"
                  className="bg-transparent"
                >
                  {" "}
                  <span className="e-icons e-close cursor-pointer p-3 text-center" />
                </button>
              </div>
            </div>
            <div className="subtotal">
              <SubTotal />
            </div>
            <div className="billing_address">
              <Billing />
            </div>
          </SidebarComponent>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
