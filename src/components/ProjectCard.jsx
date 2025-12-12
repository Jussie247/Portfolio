// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MediaGallery } from './ProjectMedia.jsx';

// Helper: wandle relative Pfade korrekt für Dev & GitHub Pages um
const withBase = (path) => {
    if (!path) return path;
    if (path.startsWith('http')) return path;

    // Dev-Server: immer ab Root, ohne /Portfolio
    if (import.meta.env.DEV) {
        return '/' + path.replace(/^\/+/, '');
    }

    // Build (GitHub Pages): BASE_URL (z.B. /Portfolio/) berücksichtigen
    const base = import.meta.env.BASE_URL || '/';
    const cleaned = path.replace(/^\/+/, '');
    return `${base}${cleaned}`;
};

export const ProjectCard = ({ project, index }) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const hasMedia = project.media && project.media.length > 0;

    // Rohes Thumbnail (kann Bild oder Video sein)
    const rawThumbnail =
        project.thumbnail || (hasMedia ? project.media[0].src : null);

    // Ist das Thumbnail ein Video (webm/mp4/ogg)?
    const isVideoThumb =
        rawThumbnail && /\.(mp4|webm|ogg)$/i.test(rawThumbnail);

    // finaler URL mit Base
    const thumbnailSrc = rawThumbnail ? withBase(rawThumbnail) : null;

    const openGallery = () => {
        console.log('OPENING GALLERY WITH MEDIA:', project.media);
        if (hasMedia) setIsGalleryOpen(true);
    };

    const closeGallery = () => setIsGalleryOpen(false);

    return (
        <>
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: 'easeOut',
                }}
                className="mb-8 rounded-3xl border border-amber-900/10 bg-white/90 p-5 shadow-soft-xl dark:border-amber-200/10 dark:bg-slate-950/90"
            >
                {/* MEDIA THUMBNAIL */}
                <div className="mb-4">
                    {thumbnailSrc ? (
                        <button
                            type="button"
                            onClick={openGallery}
                            className="block w-full overflow-hidden rounded-2xl border border-black/10 bg-black/30 dark:border-white/10"
                        >
                            {isVideoThumb ? (
                                <video
                                    src={thumbnailSrc}
                                    className="h-56 w-full object-cover md:h-64"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={thumbnailSrc}
                                    alt={project.title}
                                    className="h-56 w-full object-cover md:h-64"
                                />
                            )}
                        </button>
                    ) : (
                        <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-slate-400/40 bg-slate-50/40 text-xs text-slate-500 dark:border-slate-600/50 dark:bg-slate-900/40 dark:text-slate-400">
                            Media coming soon
                        </div>
                    )}
                </div>

                {/* TEXT CONTENT */}
                <div className="space-y-2">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-amber-200 dark:drop-shadow-[0_0_6px_rgba(245,158,11,0.25)]">
                        {project.title}
                    </h3>

                    {project.subtitle && (
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                            {project.subtitle}
                        </p>
                    )}

                    {project.genre && (
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {project.genre}
                        </p>
                    )}

                    {project.purpose && (
                        <p className="pt-2 text-base leading-relaxed text-slate-800 dark:text-slate-300">
                            {project.purpose}
                        </p>
                    )}

                    {/* Tasks */}
                    {project.tasks && project.tasks.length > 0 && (
                        <div className="pt-3">
                            <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                                What I worked on
                            </h4>
                            <ul className="space-y-1.5 text-sm leading-relaxed text-slate-800 dark:text-slate-300">
                                {project.tasks.map((task, i) => (
                                    <li key={i}>• {task}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Highlight */}
                    {project.highlight && (
                        <div className="pt-3 text-sm italic leading-relaxed text-slate-700 dark:text-slate-300">
                            “{project.highlight}”
                        </div>
                    )}

                    {/* Tools links — Team rechts */}
                    <div className="pt-3 grid grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400">
                        {/* LEFT COLUMN — Tools */}
                        <div>
                            <div className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-700 dark:text-slate-300 md:text-[12px]">
                                Tools
                            </div>
                            <div className="leading-relaxed">
                                {project.tools ? project.tools.join(', ') : '—'}
                            </div>
                        </div>

                        {/* RIGHT COLUMN — Team (aligned name + role, block rechts, Text links) */}
                        <div className="text-right">
                            <div className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-700 dark:text-slate-300 md:text-[12px]">
                                Team
                            </div>

                            <div className="inline-block space-y-1 text-left leading-relaxed">
                                {project.groupMembers?.map((m, i) => {
                                    const [name, role] = m.split('–').map((s) => s.trim());
                                    return (
                                        <div
                                            key={i}
                                            className="grid grid-cols-[max-content_1fr] gap-2 whitespace-nowrap"
                                        >
                                            {/* Name */}
                                            <span className="font-medium text-slate-800 dark:text-slate-200">
                                                {name}
                                            </span>

                                            {/* Role */}
                                            <span className="text-slate-500 dark:text-slate-400">
                                                {role}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Media hint */}
                    {hasMedia && (
                        <button
                            type="button"
                            onClick={openGallery}
                            className="mt-4 inline-flex items-center rounded-full border border-amber-500/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-800 hover:bg-amber-500/10 dark:border-amber-300/60 dark:text-amber-200"
                        >
                            View gameplay &amp; media
                        </button>
                    )}
                </div>
            </motion.article>

            {/* MEDIA GALLERY OVERLAY */}
            {hasMedia && isGalleryOpen && (
                <MediaGallery media={project.media} onClose={closeGallery} />
            )}
        </>
    );
};
