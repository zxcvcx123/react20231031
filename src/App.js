import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Tempora?</Button>
      <Button colorScheme="orange">Necessitatibus?</Button>
      <Button colorScheme="gray" size={"sm"}>
        Odit!
      </Button>
      <Button colorScheme="purple" size={"xs"}>
        Eveniet.
      </Button>
      <Button colorScheme="messenger" size={"lg"}>
        Iusto!
      </Button>
      <Button variant={"outline"} colorScheme="twitter">
        Et.
      </Button>
      <Button colorScheme="telegram" variant={"ghost"}>
        Ratione.
      </Button>
      <Button variant={"link"}>Non.</Button>
      <Button variant={"unstyled"}>Facere?</Button>
      <Button leftIcon={<EmailIcon />}>Reiciendis.</Button>
      <Button rightIcon={<ArrowRightIcon />}>Maiores.</Button>
      <Button isLoading loadingText={"전송중"}>
        Excepturi.
      </Button>
      <Button>Perferendis.</Button>
      <Button>Ipsa!</Button>
      <Button>Id.</Button>
      <Button>Eligendi?</Button>
      <Button>Voluptate!</Button>
      <Button>Quibusdam?</Button>
      <Button>Aut!</Button>
      <Button>Sed.</Button>
      <Button>Explicabo.</Button>
      <Button>Distinctio!</Button>
      <Button>Non.</Button>
      <Button>Dicta?</Button>
      <Button>Blanditiis.</Button>
      <Button>Nesciunt?</Button>
      <Button>Nobis!</Button>
      <Button>Quia?</Button>
      <Button>Delectus.</Button>
    </>
  );
}

export default App;
