import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const getInitialTheme = () => {
    // On the server or very first render: default to light
    if (typeof window === 'undefined') return 'light';

    // If the user has a stored preference, respect it
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;

    // No stored preference -> ALWAYS start in light mode
    return 'light';
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
