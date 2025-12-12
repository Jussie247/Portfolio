// src/components/Section.jsx
import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ id, label, index = 0, children }) => {
    const spacing = 'pt-10 pb-16 md:pt-12 md:pb-20';

    return (
        // scroll-mt-24: when using #anchors, leave space for sticky header
        <section id={id} className={`scroll-mt-24 ${spacing}`}>
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // trigger as soon as *any* part is visible
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                        ease: 'easeOut',
                    }}
                    className="mb-8 flex items-center gap-4"
                >
                    {/* Decorative line */}
                    <span className="h-px w-16 bg-gradient-to-r from-amber-700 to-amber-700/0 dark:from-amber-200 dark:to-amber-200/0" />

                    {/* Label */}
                    <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-amber-200 dark:drop-shadow-[0_0_6px_rgba(245,158,11,0.25)] md:text-2xl">
                        {label}
                    </h2>
                </motion.div>

                {/* Section Content */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // same: trigger early so content appears immediately when reached
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.08 + index * 0.04,
                        ease: 'easeOut',
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};
