// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  const axiosPublic = useAxiosPublic();

  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("menu");
      return res.data;
    },
  });

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:3000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  return [menu, loading, refetch];
};

export default useMenu;
