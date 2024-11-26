import { useState } from "react";

export const useOpenDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClickOpenDialog = () => {
    setOpen((prev) => !prev);
  };
  return { open, onClickOpenDialog };
};
