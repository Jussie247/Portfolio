// src/components/ProjectMedia.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const containerVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" },
    },
};

export const MediaGallery = ({ media, onClose, currentIndex = 0 }) => {
    const [index, setIndex] = useState(currentIndex);

    // ESC closes
    useEffect(() => {
        const handleKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    if (!media || media.length === 0) return null;

    const prev = (e) => {
        e.stopPropagation();
        setIndex((i) => (i === 0 ? media.length - 1 : i - 1));
    };

    const next = (e) => {
        e.stopPropagation();
        setIndex((i) => (i === media.length - 1 ? 0 : i + 1));
    };

    const item = media[index];

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose}
            >
                <motion.div
                    className="relative max-w-5xl w-full px-4"
                    variants={containerVariants}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* CLOSE BUTTON */}
                    <button
                        className="absolute -top-10 right-0 px-3 py-1 rounded-full 
                       bg-black/40 text-white text-sm backdrop-blur-sm
                       border border-white/10 hover:bg-black/60 transition"
                        onClick={onClose}
                    >
                        ✕ Close
                    </button>

                    {/* LEFT ARROW */}
                    {media.length > 1 && (
                        <button
                            onClick={prev}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                         flex h-10 w-10 items-center justify-center 
                         rounded-full bg-black/40 text-white 
                         border border-white/10 
                         text-lg leading-none
                         hover:bg-black/60 transition"
                        >
                            <span className="relative -top-[4px]">←</span>
                        </button>
                    )}

                    {/* MEDIA FRAME */}
                    <div className="media-frame overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-white/5 dark:bg-white/5">
                        {item.type === "image" && (
                            <img
                                src={item.src}
                                alt={item.alt || ""}
                                className="w-full h-auto"
                            />
                        )}

                        {item.type === "video" && (
                            <video
                                src={item.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto"
                            />
                        )}
                    </div>

                    {/* RIGHT ARROW */}
                    {media.length > 1 && (
                        <button
                            onClick={next}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-20
                         flex h-10 w-10 items-center justify-center 
                         rounded-full bg-black/40 text-white 
                         border border-white/10 
                         text-lg leading-none
                         hover:bg-black/60 transition"
                        >
                            <span className="relative -top-[4px]">→</span>
                        </button>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
