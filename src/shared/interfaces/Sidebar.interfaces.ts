import { ComponentType, Dispatch, SetStateAction } from "react";
import { TreeNode } from "./tree.interfaces";

export interface IContent {
  icon: ComponentType<any>;
  title: string;
  onToggleRotation?: () => void;
  isRotated?: boolean;
  showArrow: boolean;
  setExpandedNodes?: Dispatch<SetStateAction<Set<number | string | undefined>>>;
  nodeId?: string | number | undefined;
  nodes?: TreeNode[];
}
