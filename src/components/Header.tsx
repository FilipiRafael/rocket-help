import { HStack, IconButton, useTheme, Heading, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

type Props = StyledProps & {
    title: string
}

export function Header({ title, ...rest }: Props) {
    const navigation = useNavigation();
    const { colors } = useTheme();

    function handleGoBack() {
        navigation.goBack();
    }

  return (
    <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pb={6}
        pt={12}
        {...rest}
    >
        <IconButton
            icon={<CaretLeft color={colors.gray[200]} size={24} />}
            onPress={handleGoBack}
        />
        <Heading
            color="gray.100"
            alignItems="center"
            fontSize="lg"
            flex={1}
            ml={12}
        >
            {title}
        </Heading>
    </HStack>
  );
}