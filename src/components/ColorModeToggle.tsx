import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Theme"
      icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
      onClick={toggleColorMode}
      position="absolute"
      top="4"
      right="4"
      zIndex="999"
    />
  );
};

export default ColorModeToggle;
