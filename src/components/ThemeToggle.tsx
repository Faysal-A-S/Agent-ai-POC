import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-end px-8 pt-4 bg-blue-500 dark:bg-gray-500">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-md hover:scale-105 transition-all duration-300"
      >
        {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
