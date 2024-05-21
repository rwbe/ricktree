import { Icon, Tooltip } from "@chakra-ui/react";
import { Link } from "@/config";
import { FC } from "react";
import { MotionLink } from "./motion";
import { useThemeStyles } from "./themeStyles"; 

const ContactLink: FC<Link> = ({ title, href, icon }) => {
  const { bgStyle, iconColor } = useThemeStyles(); 

  return (
    <Tooltip label={title} placement="top">
      <MotionLink
        href={href}
        isExternal
        rounded="full"
        alignItems="center"
        transitionDuration="0.1s"
        _hover={{ background: bgStyle }} 
        _active={{ background: bgStyle }} 
        _focus={{ background: bgStyle }} 
        display="flex"
        p={3}
        gap={2}
      >
        <Icon as={icon} boxSize={6} verticalAlign={"-.25em"} color={iconColor} /> 
      </MotionLink>
    </Tooltip>
  );
};

export default ContactLink;
