import { useEffect, useState } from "react";

export function useData() {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    const loadData = async () => {
      const uri = "https://randomuser.me/api/?page=1&results=50&seed=devdactic";
      const data = await fetch(uri);
      const dataJSON = await data.json();
      setData(dataJSON.results);
    };
    loadData();
  }, []);

  const getUserByEmail = async (email: string) => {
    const uri = "https://randomuser.me/api/?page=1&results=50&seed=devdactic";
    const data = await fetch(uri);
    const dataJSON = await data.json();

    // .Todos los usuario con el email
    const user = dataJSON.results.filter((user: any) => user.email === email);
    // El primer usuario con el email indicado
    return user[0]
  }

  return { data, getUserByEmail };
}
