import { FunctionComponent } from "react";
import { FaChevronRight } from "react-icons/fa";

// Hooks
import { IContent } from "../../shared/interfaces/Sidebar.interfaces";

const Content: FunctionComponent<IContent> = ({
  showArrow,
  isRotated,
  onToggleRotation,
  title,
  icon: Icon,
  setExpandedNodes,
  nodeId,
  nodes,
}) => {
  // Toggle node expansion
  const toggleNode = (nodeId: number | string | undefined) => {
    if (onToggleRotation) {
      onToggleRotation();
    }
    if (setExpandedNodes) {
      setExpandedNodes((prevExpandedNodes) => {
        const newExpandedNodes = new Set(prevExpandedNodes);
        if (newExpandedNodes.has(nodeId)) {
          newExpandedNodes.delete(nodeId);
          removeChildrenFromSet(nodeId, newExpandedNodes);
        } else {
          newExpandedNodes.add(nodeId);
        }
        return newExpandedNodes;
      });
    }
  };
  // Helper function to remove children of a node from expandedNodes

  const removeChildrenFromSet = (
    parentId: number | string | undefined,
    set: Set<number | string | undefined>
  ) => {
    nodes?.forEach((node) => {
      if (node.id === parentId && node.children) {
        node.children.forEach((child) => {
          set.delete(child.id);
          removeChildrenFromSet(child.id, set);
        });
      }
    });
  };

  return (
    <div className="w-full flex items-center max-md:justify-center gap-1">
      {showArrow ? (
        <FaChevronRight
          color="#222"
          size={16}
          className={`${
            isRotated ? "rotate-90" : "rotate-0"
          } transition-all ease-in-out duration-300 hover:bg-gray-200 p-[2px] rounded-[4px] cursor-pointer`}
          onClick={() => {
            toggleNode(nodeId);
          }}
        />
      ) : null}

      <div
        className={`flex items-center max-md:justify-center ${
          showArrow ? "gap-1" : "gap-4"
        }`}
      >
        <Icon color="#222" size={18} />
        <p className="font-medium text-sm text-[#222] max-md:hidden">{title}</p>
      </div>
    </div>
  );
};

export default Content;
