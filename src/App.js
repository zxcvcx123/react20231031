import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>모달 열기</Button>

      <Modal
        closeOnOverlayClick={false}
        isCentered
        motionPreset="slideInBottom"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달의 제목</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            doloremque exercitationem impedit laboriosam non nostrum, ratione.
            Culpa explicabo fugiat fugit incidunt nesciunt nostrum quas quasi
            quia, rerum soluta. Accusantium, beatae?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
