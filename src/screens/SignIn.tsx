import React from 'react';
import { useState } from "react";
import auth from "@react-native-firebase/app";
import { Alert } from "react-native";
import { VStack, Heading, Icon, useTheme } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import Logo from "../images/logo_primary.svg";
import { Envelope, Key } from "phosphor-react-native";

export function SignIn() {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe o e-mail e senha.");
    }
  }

  return (
    <VStack flex={1} alignItems="center" bgColor="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        marginBottom={4}
        placeholder="E-mail"
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setEmail}
      />
      <Input
        marginBottom={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  );
}
