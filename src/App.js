import { Box, SimpleGrid } from "@chakra-ui/react";

function App() {
  /*
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
   */
  return (
    <>
      <SimpleGrid spacing={"10px"} columns={{ sm: 2, md: 3 }}>
        <Box bg="blue.300">Lorem.</Box>
        <Box bg="blue.300">Dolore?</Box>
        <Box bg="blue.300">Necessitatibus.</Box>
        <Box bg="blue.300">Accusamus.</Box>
        <Box bg="blue.300">Maiores.</Box>
        <Box bg="blue.300">Voluptas!</Box>
        <Box bg="blue.300">Quasi?</Box>
        <Box bg="blue.300">Consequuntur!</Box>
        <Box bg="blue.300">Illo?</Box>
        <Box bg="blue.300">Eligendi?</Box>
        <Box bg="blue.300">Impedit!</Box>
        <Box bg="blue.300">Sit.</Box>
        <Box bg="blue.300">Dolor?</Box>
        <Box bg="blue.300">Ratione?</Box>
        <Box bg="blue.300">Aperiam.</Box>
        <Box bg="blue.300">Dicta.</Box>
        <Box bg="blue.300">Adipisci?</Box>
        <Box bg="blue.300">Perferendis.</Box>
        <Box bg="blue.300">Tenetur?</Box>
        <Box bg="blue.300">Laboriosam!</Box>
        <Box bg="blue.300">Impedit.</Box>
        <Box bg="blue.300">Laboriosam.</Box>
        <Box bg="blue.300">Ex?</Box>
        <Box bg="blue.300">Eius.</Box>
        <Box bg="blue.300">Vitae!</Box>
        <Box bg="blue.300">Assumenda.</Box>
        <Box bg="blue.300">Illum?</Box>
        <Box bg="blue.300">Alias?</Box>
        <Box bg="blue.300">Architecto.</Box>
        <Box bg="blue.300">Doloremque.</Box>
      </SimpleGrid>
    </>
  );
}

export default App;
