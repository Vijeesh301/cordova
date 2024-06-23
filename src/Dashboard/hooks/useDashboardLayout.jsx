import { useState } from "react";

const useDashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return {
    open,
    setOpen,
  };
};

export default useDashboardLayout;
