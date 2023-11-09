

const isDarkMode = () => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return (savedDarkMode === null) ? window.matchMedia('(prefers-color-scheme: dark)').matches : savedDarkMode === 'true';
}

export const browserHelper = {
    isDarkMode
}
