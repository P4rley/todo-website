import SidebarContent from "./SidebarContent";

type Props = {
  children: React.ReactNode;
};
const Sidebar = ({ children }: Props) => {
  return (
    <div className="flex ">
      <SidebarContent />

      <div>{children}</div>
    </div>
  );
};
export default Sidebar;
