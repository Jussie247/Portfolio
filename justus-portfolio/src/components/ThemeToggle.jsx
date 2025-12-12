import React from 'react';
import { useTheme } from '../theme/ThemeProvider.jsx';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100"
            aria-label="Toggle theme"
        >
            <motion.div
                layout
                className="flex items-center gap-1"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full">
                    {isDark ? (
                        <span className="text-[13px]">🌙</span>
                    ) : (
                        <span className="text-[13px]">☀️</span>
                    )}
                </span>
                <span className="hidden sm:inline">
                    {isDark ? 'Dark' : 'Light'} mode
                </span>
            </motion.div>
        </button>
    );
};
