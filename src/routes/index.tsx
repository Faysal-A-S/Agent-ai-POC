import { createFileRoute } from "@tanstack/react-router";
import ChatComponent from "../components/ChatComponent";
import ThemeToggle from "../components/ThemeToggle";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ThemeToggle />
      <div className="bg-blue-500 dark:bg-gray-500 md:pb-16 pb-4 pt-6 md:pt-16 ">
        <div className=" max-w-lg  mx-4 md:mx-auto bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden transition-colors duration-300">
          <div className="w-full max-w-lg bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-colors duration-300">
            <ChatComponent />
          </div>
        </div>
      </div>
    </>
  );
}
