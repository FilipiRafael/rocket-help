import { Button as NativeBaseButton, IButtonProps, Heading } from "native-base";
import React from "react";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      bgColor="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bgColor: "green.500",
      }}
      {...rest}
    >
      <Heading color="#fff" fontSize="sm">
        {title}
      </Heading>
    </NativeBaseButton>
  );
}
