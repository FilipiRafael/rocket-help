import { HStack, IconButton, useTheme, Heading, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
    title: string
}

export function Header({ title, ...rest }: Props) {
    const { colors } = useTheme();
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