import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
            <FormHelperText>띄어쓰기 없이 입력하세요</FormHelperText>
          </FormControl>
        </Box>
      </Center>
      <Center mt={"2%"}>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>하나만 선택</FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">lorem.</Radio>
                <Radio value="value2">lorem</Radio>
                <Radio value="value3">lorem</Radio>
                <Radio value="value4">lorem</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>
      <Center>
        <Box w={"480px"} mt={"1%"}>
          <FormControl>
            <CheckboxGroup>
              <Flex gap={5}>
                <Checkbox>lorem</Checkbox>
                <Checkbox>ipsum</Checkbox>
                <Checkbox>commodi</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </>
  );
}

export default App;
