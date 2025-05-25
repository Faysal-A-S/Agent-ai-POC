const TypingIndicator = () => {
  return (
    <div className="px-3 py-1.5 my-1 rounded-lg max-w-xs bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white w-fit">
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
