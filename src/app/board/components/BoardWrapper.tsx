"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

function BoardWrapper({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <motion.div dragConstraints={{ left: 0, top: 0, bottom: 0 }}>
      {children}
    </motion.div>
  );
}
export default BoardWrapper;
