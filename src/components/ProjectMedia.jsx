// src/components/ProjectMedia.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// gleiche Hilfsfunktion wie in ProjectCard
const withBase = (path) => {
    if (!path) return path;
    if (path.startsWith('http')) return path;
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
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose, index, media]);

    if (!media || media.length === 0) return null;

    const next = () => setIndex((i) => (i + 1) % media.length);
    const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);

    const active = media[index];
    const src = withBase(active.src);

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
                    className="relative w-full max-w-5xl px-4"
                    variants={containerVariants}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* CLOSE BUTTON */}
                    <button
                        className="absolute -top-10 right-0 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-sm text-white backdrop-blur-sm transition hover:bg-black/60"
                        onClick={onClose}
                    >
                        ✕ Close
                    </button>

                    {/* MEDIA FRAME */}
                    <div className="media-frame relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl">
                        {active.type === 'video' ? (
                            <video
                                src={src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-auto w-full"
                            />
                        ) : (
                            <img src={src} alt={active.alt || ''} className="h-auto w-full" />
                        )}

                        {/* LEFT ARROW */}
                        {media.length > 1 && (
                            <button
                                type="button"
                                onClick={prev}
                                className="group absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-md backdrop-blur transition hover:bg-black"
                            >
                                <span className="inline-block translate-y-[0.5px] text-lg">
                                    ←
                                </span>
                            </button>
                        )}

                        {/* RIGHT ARROW */}
                        {media.length > 1 && (
                            <button
                                type="button"
                                onClick={next}
                                className="group absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-md backdrop-blur transition hover:bg-black"
                            >
                                <span className="inline-block translate-y-[0.5px] text-lg">
                                    →
                                </span>
                            </button>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
