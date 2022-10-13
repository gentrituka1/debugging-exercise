import { useState } from "react";

function useProduct() {
  const [isUnfolded, setIsUnfolded] = useState<boolean>(false);

  function handleToggleFold() {
    setIsUnfolded(!isUnfolded);
  }

  return { isUnfolded, handleToggleFold };
}
export default useProduct;
