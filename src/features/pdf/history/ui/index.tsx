import { useQuery } from "@tanstack/react-query";

export const History = () => {
  const {} = useQuery({
    queryKey: ["history"],
    queryFn: async () => {},
  });
};
