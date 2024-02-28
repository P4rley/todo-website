import { ComponentType, Dispatch, SetStateAction } from "react";

// Define the structure of the tree node
export interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}

// Define props for the TreeView component
export interface TreeViewProps {
  data: TreeNode[];
  icon: ComponentType<any>;
  title: string;
  toggleRotation?: Dispatch<SetStateAction<boolean>>;
  isRotated?: boolean;
}
