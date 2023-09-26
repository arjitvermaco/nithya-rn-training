import React from "react";
import Dummy from "./Dummy";

export default function ShowName(props) {
 let {myUserName,myAge} = props

  return (
    <div>
        {myAge}
      <Dummy myName={myUserName} />
    </div>
  );
}
