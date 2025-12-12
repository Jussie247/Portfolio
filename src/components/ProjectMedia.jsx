// src/components/ProjectMedia.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper: Pfad für Dev & GitHub Pages anpassen
const withBase = (path) => {
    if (!path) return path;
    if (path.startsWith('http')) return path;

    if (import.meta.env.DEV) {
        return '/' + path.replace(/^\/+/, '');
    }

    const base = import.meta.env.BASE_URL || '/';
    const cleaned = path.replace(/^\/+/, '');
    return `${base}${cleaned}`;
};

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
        transition: { duration: 0.35, ease: 'easeOut' },
    },
};

export const MediaGallery = ({ media, onClose, currentIndex = 0 }) => {
    const [index, setIndex] = useState(currentIndex);

    // ESC zum Schließen
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % media.length);
            if (e.key === 'ArrowLeft')
                setIndex((i) => (i - 1 + media.length) % media.length);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose, media.length]);

    if (!media || media.length === 0) return null;

    const item = media[index];
    const src = withBase(item.src);

    const prev = (e) => {
        e.stopPropagation();
        setIndex((i) => (i === 0 ? media.length - 1 : i - 1));
    };

    const next = (e) => {
        e.stopPropagation();
        setIndex((i) => (i === media.length - 1 ? 0 : i + 1));
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose} // Klick auf Overlay schließt
            >
                <motion.div
                    className="relative max-w-5xl w-full px-4"
                    variants={containerVariants}
                    onClick={(e) => e.stopPropagation()} // verhindert Close bei Klick auf Inhalt
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
                            <span className="relative -top-[1px]">←</span>
                        </button>
                    )}

                    {/* MEDIA FRAME */}
                    <div className="media-frame overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-white/5 dark:bg-white/5">
                        {item.type === 'image' && (
                            <img
                                src={src}
                                alt={item.alt || ''}
                                className="w-full h-auto"
                            />
                        )}

                        {item.type === 'video' && (
                            <video
                                src={src}
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
                            <span className="relative -top-[1px]">→</span>
                        </button>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
