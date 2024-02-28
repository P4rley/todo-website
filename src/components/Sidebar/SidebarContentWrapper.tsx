import { useState, Children, cloneElement, ReactElement } from "react";

interface RotatingButtonProps {
  onToggleRotation: () => void;
  isRotated: boolean;
}

type Props = {
  children: React.ReactNode;
};

const SidebarContentWrapper = ({ children }: Props) => {
  const [isRotated, setIsRotated] = useState(false);

  const toggleRotation = () => {
    setIsRotated((prevIsRotated) => !prevIsRotated);
  };

  return (
    <div className="bg-transparent hover:bg-[#f8f8f8] py-1 transition-all duration-300 ease-in-out  cursor-pointer md:px-3">
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<RotatingButtonProps>, {
          onToggleRotation: toggleRotation,
          isRotated,
        })
      )}
    </div>
  );
};
export default SidebarContentWrapper;
