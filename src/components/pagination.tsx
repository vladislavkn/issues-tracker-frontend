import { HStack, Button } from "@chakra-ui/react";
import { FC } from "react";

type PaginationProps = {
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export const Pagination: FC<PaginationProps> = ({
  hasNext,
  hasPrev,
  onNext,
  onPrev,
}) => (
  <HStack justifyContent="flex-end">
    <HStack gap={4} align="center">
      <Button disabled={!hasPrev} onClick={onPrev}>
        Prev page
      </Button>
      <Button disabled={!hasNext} onClick={onNext}>
        Next page
      </Button>
    </HStack>
  </HStack>
);
