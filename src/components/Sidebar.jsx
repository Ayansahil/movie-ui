import React from "react";

const Sidebar = () => {
  return (
    <div className=" flex flex-row min-h-screen w-[15%] bg-amber-500">
      <div className="bg-red-300  text-white flex gap-12 w-fit h-fit m-2 text-2xl ">
        <i class="ri-tv-line">Drameeo</i>
        <i class="ri-sidebar-fold-line"></i>
      </div>
    </div>
  );
};

export default Sidebar;
