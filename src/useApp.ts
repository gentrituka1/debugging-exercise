import { displayError } from "./utils/consts";
import { getAll } from "./utils/API";
import { Product } from "./utils/types";
import React, { useState } from "react";

const useApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  // TODO: remove type
  const [products, setProducts] = useState<null | Product[]>(null);

  function toggleLoading() {
    setIsLoading(!isLoading);
  }

  const init = React.useCallback(() => {
    getAll((products) => {
      // TODO: remove .products
      setProducts(products.products);
      toggleLoading();
    }).catch((err) => {
      displayError(err);
      toggleLoading();
    });
  }, [toggleLoading, setIsLoading, isLoading]);

  React.useEffect(() => {
    init();
    return () => console.log("Dismounting app");
  }, []);

  return { products, isLoading };
};

export default useApp;
