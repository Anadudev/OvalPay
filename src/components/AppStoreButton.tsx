import React from "react";

const AppStoreButton = ({icon, name}) => {
  return (
    <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2">
      <img
        src={icon}
        alt=""
        className="size-11"
      />
      <p className="capitalize text-xl text-black">{name}</p>
    </div>
  );
};

export default AppStoreButton;
