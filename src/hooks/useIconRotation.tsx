import { useEffect, useState } from "react";

export default function useIconRotation(
  initialState: boolean | undefined = false
): [boolean, () => void] {
  const [isRotated, setIsRotated] = useState<boolean>(initialState || false);

  // Function to toggle rotation state
  const toggleRotation = () => {
    setIsRotated((prevIsRotated) => !prevIsRotated);
  };

  return [isRotated, toggleRotation];
}
