import React from "react";
function PageLayout(props) {
  return (
    <>
      {props?.children?.map((child) => {
        return child;
      })}
    </>
  );
}

export default PageLayout;
