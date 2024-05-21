import { Link } from "@/config";
import { Icon, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { MotionLink } from "./motion";
import { useThemeStyles } from "./themeStyles";

const OtherLink: FC<Link> = ({ title, href, icon }) => {
  const { bgStyle, textStyle, hoverBgStyle } = useThemeStyles();

  return (
    <MotionLink
      href={href}
      isExternal
      bg={bgStyle} 
      rounded={6}
      display="grid"
      gridTemplateColumns={"1fr 1fr 1fr"}
      px={6}
      py={4}
      textAlign="center"
      fontWeight={500}
      _hover={{ background: hoverBgStyle }} 
      _active={{ background: bgStyle }} 
      _focus={{ background: bgStyle }} 
      whileHover={{ scale: [1, 1.05, 1.04] }}
      transition={{ duration: 0.25 }}
    >
      <Icon as={icon} boxSize={6} color={textStyle} /> {/* Ajusta a cor do ícone */}
      <Text color={textStyle}>{title}</Text> {/* Ajusta a cor do texto */}
    </MotionLink>
  );
};

export default OtherLink;
