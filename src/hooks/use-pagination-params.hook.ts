import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export const usePaginationParams = (defaultTake: number = 12) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const skip = parseInt(searchParams.get("skip") ?? "0");
  const take = parseInt(searchParams.get("take") ?? defaultTake.toString());

  const setPaginationParam = useCallback(
    (name: string, value: string | number) =>
      setSearchParams((params) => {
        params.set(name, value.toString());
        return params;
      }),
    [setSearchParams]
  );

  return { skip, take, setPaginationParam };
};
