import { ChakraProps, Text, VStack, useToast } from "@chakra-ui/react";
import { FC } from "react";
import { copyText } from "../utils/copyText";

type TileProps = {
  label: string;
  children: string | number;
} & ChakraProps;

export const Tile: FC<TileProps> = ({ label, children, ...chakraProps }) => {
  const toast = useToast();

  const copyContent = async () => {
    try {
      await copyText(children.toString());
      toast({ title: "Copied!" });
    } catch {
      toast({ title: "Copying failed", duration: 9000, status: "error" });
    }
  };

  return (
    <VStack
      boxShadow="sm"
      borderRadius=".25rem"
      borderWidth={1}
      borderColor="gray.200"
      gap={1}
      py={1}
      px={2}
      align="flex-start"
      flexGrow={1}
      _active={{ backgroundColor: "gray.50" }}
      {...chakraProps}
      onClick={copyContent}
    >
      <Text userSelect="none" fontSize="sm" color="gray.500">
        {label}
      </Text>
      <Text fontWeight="medium">{children}</Text>
    </VStack>
  );
};
