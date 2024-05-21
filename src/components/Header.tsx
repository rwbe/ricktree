import { USER } from "@/config";
import { Heading, Image, VStack, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { MdVerified } from "react-icons/md";
import { useThemeStyles } from "./themeStyles";

const Header: FC = () => {
  const { colorMode } = useColorMode(); 
  const { bgStyle, textStyle } = useThemeStyles();


  return (
    <VStack alignItems="center">
      <div
        style={{
          width: "fit-content",
          padding: "10px",
          borderRadius: "20px", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Image
          src="/profile.jpg"
          alt={USER.name}
          width={120}
          height={120}
          borderRadius="full"
          boxShadow="lg"
          border="2px solid white"
          _hover={{
            transform: "scale(1.05) rotate(10deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
          <Heading size="lg" mb={0} color={colorMode === "light" ? "black" : "white"}>
            {USER.name}
          </Heading>
          {USER.isVerified && (
            <MdVerified color="#249EF0" size={24} style={{ marginLeft: "5px" }} />
          )}
        </div>
        {USER.role && (
          <div
            style={{
              borderRadius: "999px", 
              background: bgStyle, 
              padding: "4px 18px", 
              marginTop: "5px", 
              display: "inline-flex", 
              alignItems: "center", 
            }}
          >
            <Text
              fontSize="lg"
              color={textStyle} 
              fontWeight="bold"
            >
              {USER.role}
            </Text>
          </div>
        )}
      </div>
      <Heading as="h2" size="md" color="gray.300" fontWeight="normal" mt={2} style={{ color: textStyle }}>
        {USER.bio}
      </Heading>
    </VStack>
  );
};

export default Header;
