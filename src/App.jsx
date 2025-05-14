import { useState } from "react";

import "./App.css";
import SideBar from "./Components/SideBar";
import { registerLicense } from "@syncfusion/ej2-base";

function App() {
  registerLicense(
    
    "Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCeEx3Rnxbf1x1ZFRHal9UTnZWUiweQnxTdEBjXH5acXVWQWRfWEN2W0lfag=="
  );

  return (
    <div className="box-border">
   <SideBar/>
    </div>
  );
}

export default App;
