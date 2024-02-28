import { useState } from "react";
import SidebarContentWrapper from "./Sidebar/SidebarContentWrapper";
import SidebarTabContent from "./Sidebar/SidebarTabContent";

// Icons
import { FaChevronRight } from "react-icons/fa";

// Types
import { TreeNode, TreeViewProps } from "@/shared/interfaces/tree.interfaces";
import { IoMdSettings } from "react-icons/io";

const TreeView: React.FC<TreeViewProps> = ({ data, icon: Icon, title }) => {
  // State to keep track of expanded nodes
  const [expandedNodes, setExpandedNodes] = useState<
    Set<number | string | undefined>
  >(new Set());

  // Recursive function to render tree nodes
  const renderTreeNodes = (nodes: TreeNode[]) => {
    return nodes.map((node, i) => (
      <div key={node.id} className="">
        <div>
          <SidebarContentWrapper>
            <SidebarTabContent
              showArrow={true}
              icon={IoMdSettings}
              title="Dashboard"
              setExpandedNodes={setExpandedNodes}
              nodeId={node.id}
              nodes={nodes}
            />
          </SidebarContentWrapper>
          {expandedNodes.has(node.id) && node.children && (
            <div className="pl-3 bg-transparent">
              {renderTreeNodes(node.children)}
            </div>
          )}
        </div>
      </div>
    ));
  };

  return <div>{renderTreeNodes(data)}</div>;
};

export default TreeView;
