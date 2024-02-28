"use client";

import Image from "next/image";
import userImg from "@/images/user.webp";
import { useRef, useState } from "react";
import SidebarContentWrapper from "./SidebarContentWrapper";
import SidebarTabContent from "./SidebarTabContent";

// Hooks
import useOnClickOutside from "@/hooks/useOnCllickOutside";

// Icons
import {
  IoIosArrowDown,
  IoMdSearch,
  IoMdTime,
  IoMdSettings,
  IoMdAdd,
} from "react-icons/io";

// Types
import { TreeNode, TreeViewProps } from "@/shared/interfaces/tree.interfaces";
import TreeView from "../TreeView";

const treeData: TreeNode[] = [
  {
    id: 1,
    name: "Node 1",
    children: [
      {
        id: 2,
        name: "Node 1.1",
      },
      {
        id: 3,
        name: "Node 1.2",
        children: [
          {
            id: 4,
            name: "Node 1.2.1",
          },
          {
            id: 5,
            name: "Node 1.2.2",
          },
        ],
      },
    ],
  },
];

type Props = {};

const SidebarContent = ({}: Props) => {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useOnClickOutside(modalRef, () => setShowModal(false));

  return (
    <div className="w-[220px] bg-[#eef0f5]  max-md:w-[50px] py-[2rem] fixed top-0 bottom-0">
      <SidebarContentWrapper>
        <div className="w-full">
          <div
            ref={modalRef}
            className="relative max-md:flex max-md:items-center max-md:justify-center"
          >
            <div
              className="relative flex items-center max-md:justify-center gap-4"
              onClick={() => setShowModal((showModal) => !showModal)}
            >
              <Image
                src={userImg}
                alt="User Image"
                className="w-[30px] h-[30px] rounded-full"
              />
              <p className="font-medium text-base text-[#222] max-md:hidden">
                John Doe
              </p>
              <div className="max-md:hidden">
                <IoIosArrowDown color="#222" size={20} />
              </div>
            </div>

            {showModal ? (
              <div className="absolute cursor-default top-[39px] left-0 max-md:left-1 w-[350px] z-10 bg-white border border-gray-200 rounded-md p-2 max-md:w-[250px]">
                <div className="">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </SidebarContentWrapper>
      <SidebarContentWrapper>
        <SidebarTabContent showArrow={false} icon={IoMdSearch} title="Search" />
      </SidebarContentWrapper>
      <SidebarContentWrapper>
        <SidebarTabContent showArrow={false} icon={IoMdTime} title="Updates" />
      </SidebarContentWrapper>
      <SidebarContentWrapper>
        <SidebarTabContent
          showArrow={false}
          icon={IoMdSettings}
          title="Settings"
        />
      </SidebarContentWrapper>

      <div className="my-12">
        <h5 className="md:mx-3 text-[12px] text-[#222] font-medium tracking-wide">
          Favorites
        </h5>
        <SidebarContentWrapper>
          <SidebarTabContent
            showArrow={false}
            icon={IoMdSettings}
            title="Dashboard"
          />
        </SidebarContentWrapper>
      </div>

      <div className="my-12 group group-hover:opacity-100 transition-all ease-in-out duration-300">
        <div className="flex justify-between items-center md:mx-3">
          <h5 className=" text-[12px] text-[#222] font-medium tracking-wide ">
            Private
          </h5>
          <IoMdAdd
            color="#222"
            size={16}
            fontWeight={700}
            className="font-bold opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 hover:bg-gray-300 p-[2px] rounded-[4px] cursor-pointer"
          />
        </div>
        <SidebarContentWrapper>
          <SidebarTabContent
            showArrow={true}
            icon={IoMdSettings}
            title="Dashboard"
          />
        </SidebarContentWrapper>

        <TreeView data={treeData} icon={IoMdSettings} title="Dashboard" />
      </div>
    </div>
  );
};
export default SidebarContent;
