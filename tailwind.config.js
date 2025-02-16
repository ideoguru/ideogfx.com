export const content = [
  "./src/**/*.{js,ts,jsx,tsx}", // Ensure Tailwind scans all your files
];
export const theme = {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
};
export const plugins = [];
