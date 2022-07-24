import React from 'react';
import { useState } from 'react';
import { VStack, HStack, IconButton, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { SignOut } from 'phosphor-react-native';
import { ChatTeardropText } from 'phosphor-react-native';
import Logo from '../images/logo_secondary.svg';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export function Home() {
  const { colors } = useTheme();
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([{
    id: '999',
    patrimony: '3848527',
    status: 'open',
    when: '10/12/2022 às 20:30'
  }]);

  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId })
  }

  function handleLogout() {
    auth()
    .signOut()
    .catch(error => {
      console.log(error);
      return Alert.alert('Sair', 'Não foi possível sair.');
    });
  }

  return (
    <VStack flex={1} paddingBottom={6} bgColor="gray.700">
        <HStack
            w="full"
            justifyContent="space-between"
            alignItems="center"
            bg="gray.600"
            pt={12}
            pb={5}
            px={6}
        >
            <Logo />
            <IconButton
                icon={ <SignOut size={26} color={colors.gray[300]} /> }
                onPress={handleLogout}
            />
        </HStack>

        <VStack flex={1} px={6}>
          <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
            <Heading color="gray.100">
              Solicitações
            </Heading>
            <Text color="gray.200">
              {orders.length}
            </Text>
          </HStack>

        <HStack space={3} mb={8}>
          <Filter
            title="Em andamento"
            type="open"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            title="Finalizados"
            type="closed"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'} solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />
        <Button title="Nova Solicitação" onPress={handleNewOrder} />
        </VStack>
    </VStack>
  );
}