import React, { useState, useEffect } from "react";

const Detail = props => {
  const location = props.location;
  const [title, setTitle] = useState();
  const setting = () => {
    if (location.state === undefined) {
      // state가 없으면 즉, movie 클릭해서 온 접근이 아니면
      // redirect
      props.history.push("/");
    } else setTitle(location.state.title);
  };
  useEffect(setting, []);

  if (location.state) {
    return <span>{title}</span>;
  } else return null;
};

export default Detail;
