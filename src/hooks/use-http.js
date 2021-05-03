import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const fetchData = useCallback(async (url, config) => {
    const response = await fetch(url, {
      method: config.method ? config.method : "GET",
      body: config.body ? JSON.stringify(config.body) : null,
      headers: config.headers ? config.headers : {},
    });
    if (config.method !== "GET") {
      const data = await response.json();
      setItems(data);
    }
    setIsLoaded(true);
  }, []);

  return { isLoaded, items, fetchData };
};

export default useHttp;
