import { Flex, HStack, UnorderedList, VStack, useColorMode } from "@chakra-ui/react";
import { CONTACT_LINKS, OTHER_LINKS } from "@/config";
import ContactLink from "@/components/ContactLink";
import OtherLink from "@/components/OtherLink";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import { MotionStack } from "@/components/motion";
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";

// Função para gerar o ruído SVG como uma string codificada em base64
const noiseBackground = () => {
  return `url("data:image/svg+xml;base64,${btoa(
    `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>`
  )}")`;
};

const Home = () => {
  const { colorMode } = useColorMode(); 
  const [bgStyle, setBgStyle] = useState("");

  useEffect(() => {
    setBgStyle(colorMode === "light" ? "gray.200" : "gray.700");
  }, [colorMode]);

  return (
    <>
      <MetaTags />
      <Flex
        justify="center"
        alignItems="center"
        minHeight="100vh"
        px={5}
        py={10}
        position="relative"
        background={`linear-gradient(to bottom, ${colorMode === "light" ? "#E0E0E0" : "#202023"}, ${colorMode === "light" ? "#F5F5F5" : "#1a1a1d"})`}
      >
        <Flex
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          zIndex="1"
          style={{
            backgroundImage: noiseBackground(),
            opacity: "0.2",
            pointerEvents: "none",
          }}
        />
        <MotionStack
          alignItems="stretch"
          color="white"
          textAlign="center"
          maxWidth={{ base: "100%", md: 450 }}
          flex={1}
          gap={{ base: 2, md: 4 }}
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          zIndex="2"
        >
          <Logo />
          <Header />
          <HStack justifyContent="center">
            {CONTACT_LINKS.map((link) => (
              <ContactLink key={link.href} {...link} />
            ))}
          </HStack>
          <VStack as={UnorderedList} gap={2} alignItems="stretch" style={{ background: bgStyle }}>
            {OTHER_LINKS.map((link) => (
              <OtherLink key={link.href} {...link} />
            ))}
          </VStack>
        </MotionStack>
      </Flex>
    </>
  );
};

export default Home;
