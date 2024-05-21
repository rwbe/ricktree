import { useColorMode } from "@chakra-ui/react";

export const useThemeStyles = () => {
  const { colorMode } = useColorMode();

  const bgStyle = colorMode === "light" ? "#F9FAFB" : "#1a1a1d";
  const textStyle = colorMode === "light" ? "#000" : "#FFF";
  const hoverBgStyle = colorMode === "light" ? "#E4E7EB" : "#313134";
  const iconColor = colorMode === "light" ? "#000" : "#FFF"; 

  return { bgStyle, textStyle, hoverBgStyle, iconColor }; 
};
