"use client";

import Back from "../icons/Back";
import Return from "../icons/Return";
import WidgetAdd from "../icons/Widget_add";
import Text from "@/components/icons/Text";
import Select from "../icons/Select";
import Copy from "../icons/Copy";
import Expand_down from "../icons/Expand_down";
import Search from "@/components/icons/Search";
import Save from "../icons/Save";
import SettingIcon from "../icons/SettingIcon";
import useDropdownMenu from "@/utils/useClickedOutside";
import React from "react";

export const Toolbar = () => {
  return (
    <div className="flex flex-row justify-between w-full p-4 absolute z-30">
      <Settings />
      <div className="flex flex-row gap-x-7">
        <ToolKit />
        <RenderShareCard />
      </div>
    </div>
  );
};

const ToolKit = () => {
  const WidgetElementMenu = useDropdownMenu();

  const { menuDropped, nodeRef, toggleDropdownMenu } = useDropdownMenu();
  const {
    menuDropped: isMenuDropped,
    nodeRef: AddElementRef,
    toggleDropdownMenu: onDropdownMenu,
  } = WidgetElementMenu;

  return (
    <div className="ToolCard w-[337px] flex flex-row justify-between gap-x-3">
      <div className="relattive inline-block">
        <button ref={nodeRef} onClick={toggleDropdownMenu}>
          <Expand_down className="hover:bg-slate-300 opacity-70 rounded-sm p-y-7 active:bg-slate-600 duration-100" />
        </button>
        {menuDropped && (
          <div className="absolute top-18 right-[43rem] bg-white h-[120px] w-[200px] mt-5 rounded-lg flex items-center justify-center flex-col gap-y-3">
            <button onClick={toggleDropdownMenu}>something</button>
            <button onClick={toggleDropdownMenu}>something</button>
          </div>
        )}
      </div>
      <div className="w-[2px] h-9 bg-slate-300 rounded-xl opacity-40" />
      <div className="flex flex-row gap-x-3">
        <button>
          <Select className="GlobalHoveringIcons" />
        </button>
        <button>
          <Copy className="GlobalHoveringIcons" />
        </button>
        <button>
          <Text className="GlobalHoveringIcons" />
        </button>
        <div className="relative inline-block">
          <button ref={AddElementRef} onClick={onDropdownMenu}>
            <WidgetAdd className="GlobalHoveringIcons" />
          </button>
          {isMenuDropped && (
            <div className="absolute top-18 right-3 bg-white h-[120px] w-[200px] mt-5 rounded-lg flex items-center justify-center flex-col gap-y-3">
              <button onClick={toggleDropdownMenu}>something</button>
              <button onClick={toggleDropdownMenu}>something</button>
            </div>
          )}
        </div>
      </div>
      <div className="w-[2px] h-9 bg-slate-300 rounded-xl opacity-40" />
      <div className="flex flex-row gap-x-3">
        <button>
          <Back className="GlobalHoveringIcons" />
        </button>
        <button>
          <Return className="GlobalHoveringIcons" />
        </button>
      </div>
      <div className="w-[2px] h-9 bg-slate-300 rounded-xl opacity-40" />
      <button>
        <Search className="GlobalHoveringIcons" />
      </button>
    </div>
  );
};

const RenderShareCard = ({}) => {
  return (
    <div className="ToolCard w-[353px] flex justify-between gap-x-7">
      <div className="TeamMatesRendering flex flex-row ">
        <div className="UserPfp w-8 h-8 bg-yellow-600 rounded-full"></div>
        <div className="UserPfp w-8 h-8 bg-blue-600 rounded-full"></div>
        <div className="UserPfp w-8 h-8 bg-red-600 rounded-full"></div>
        <div className="UserPfp w-8 h-8 bg-red-600 rounded-full"></div>
      </div>
      <div className="UserPfp w-8 h-8 bg-yellow-600 rounded-full"></div>
      <div>
        <button className="bg-purple-800 w-24 h-8 rounded-md font-bold text-slate-200 tracking-tight">
          Share
        </button>
      </div>
    </div>
  );
};

function Settings({}) {
  const { menuDropped, nodeRef, toggleDropdownMenu } = useDropdownMenu();
  return (
    <div className="ToolCard w-[184px] flex justify-between gap-x-7 items-center">
      <button>
        <SettingIcon className="GlobalHoveringIcons" />
      </button>
      <button>
        <Save className="GlobalHoveringIcons" />
      </button>
      <div className="w-[2px] h-9 bg-slate-300 rounded-xl opacity-40" />
      <div className="relattive inline-block">
        <button ref={nodeRef}>
          <Expand_down
            className=" hover:bg-slate-300 opacity-70 rounded-sm p-y-7 active:bg-slate-600 duration-100"
            onClick={toggleDropdownMenu}
          />
        </button>
        {menuDropped && (
          <div className="absolute top-18 bg-white h-[120px] w-[200px] mt-5 rounded-lg flex items-center justify-center flex-col gap-y-3">
            <button onClick={toggleDropdownMenu}>something</button>
            <button onClick={toggleDropdownMenu}>something</button>
          </div>
        )}
      </div>
    </div>
  );
}
