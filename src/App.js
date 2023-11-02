import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          <Table>
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Optio.</Th>
                <Th>Minus.</Th>
                <Th>Labore.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Doloribus!</Td>
                <Td>Magnam?</Td>
                <Td>Tenetur?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Corporis.</Td>
                <Td>Cumque.</Td>
                <Td>Animi!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Nam.</Td>
                <Td>Nam.</Td>
                <Td>Modi!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Similique?</Td>
                <Td>Quasi!</Td>
                <Td>Provident!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Totam.</Td>
                <Td>Adipisci?</Td>
                <Td>Qui!</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default App;
