import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={handleNameInput} />
            <FormHelperText>띄어쓰기 없이 입력해주세요.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordInput}
            />
            <FormHelperText>
              특수기호와 숫자를 하나 작성해주세요.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={handleEmailInput} />

            <FormHelperText>입력된 이메일은 중복될 수 없습니다.</FormHelperText>
          </FormControl>

          <Button colorScheme="blue">가입</Button>
        </Box>
      </Center>
    </div>
  );
}

export default App;
