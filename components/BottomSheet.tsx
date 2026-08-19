// components/BottomSheet.tsx
"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  height?: string;
};

export default function BottomSheet({
  isOpen,
  onClose,
  children,
  height = "70vh",
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Smoothly fades out when isOpen becomes false
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
          />

          {/* 3. THE SLIDING SHEET */}
          <motion.div
            initial={{ y: "100%" }} // Starts completely hidden below the screen boundary
            animate={{ y: 0 }} // Slides up into full view
            exit={{ y: "100%" }} // Slides back down out of view before unmounting
            transition={{ type: "spring", damping: 25, stiffness: 220 }} // Premium mobile spring physics
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[24px] z-50 p-6 pb-10 shadow-2xl border-t border-gray-100 md:hidden flex flex-col"
            style={{
              height: height,
              borderRadius:
                height === "100vh" || height === "100dvh" ? "0px" : "24px",
            }}
          >
            {/* Visual Drag Handle Line */}
            <div
              className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6 cursor-pointer shrink-0"
              onClick={onClose}
            />

            {/* Scrollable Content wrapper */}
            <div className="flex-1 overflow-y-auto pb-6 text-right" dir="rtl">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
