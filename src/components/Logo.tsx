import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { useThemeStyles } from "./themeStyles"; // Importa as variáveis de estilo do tema
import ColorModeToggle from "./ColorModeToggle"; // Importa o componente de alternância de tema

const Logo = () => {
  const { bgStyle } = useThemeStyles(); // Usa a variável de estilo do tema para o background

  // Determina o nome do arquivo de imagem com base no modo de cor atual
  const logoSrc = bgStyle === "#1a1a1d" ? "/ricktree-light.png" : "/ricktree-dark.png";

  return (
    <Flex justifyContent="center" alignItems="center" position="relative">
      {/* Sobreposição semitransparente */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: bgStyle, 
          borderRadius: "15px",
        }}
      />
      {/* Imagem */}
      <Image
        src={logoSrc} // Usa o nome do arquivo de imagem determinado pelo tema atual
        alt="Copyright Logo"
        width="100px"
        height="auto"
        style={{ zIndex: 1 }} // Definir um z-index maior para a imagem
      />
      {/* Botão de alternância de tema */}
      <ColorModeToggle />
    </Flex>
  );
};

export default Logo;
