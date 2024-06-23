import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLanding = () => {
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const loaderFunction = () => {
    setLoader(true);
    setTimeout(() => {
      navigate("/home");
      setLoader(false);
    }, 1000);
  };

  return { loaderFunction, loader };
};
