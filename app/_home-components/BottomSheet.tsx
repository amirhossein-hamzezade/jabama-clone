// components/BottomSheet.tsx
"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  height?: string;
  roundedTop?: boolean;
};

export default function BottomSheet({
  isOpen,
  onClose,
  children,
  height = "70vh",
  roundedTop = true,
}: BottomSheetProps) {
  // Prevent the background page from scrolling when the sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    // 1. AnimatePresence listens to conditional statement inside it
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 2. BACKDROP OVERLAY */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Smoothly fades out when isOpen becomes false
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
          /> */}

          {/* 3. THE SLIDING SHEET */}
          <motion.div
            initial={{ y: "100%" }} // Starts completely hidden below the screen boundary
            animate={{ y: 0 }} // Slides up into full view
            exit={{ y: "100%" }} // Slides back down out of view before unmounting
            transition={{ type: "spring", damping: 25, stiffness: 220 }} // Premium mobile spring physics
            className={`fixed bottom-0 rounded ${roundedTop ? "rounded-t-3xl" : "rounded-none"} left-0 right-0 bg-white  z-50 shadow-2xl  md:hidden flex flex-col overflow-y-auto
            `}
            style={{
              height: height,
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
