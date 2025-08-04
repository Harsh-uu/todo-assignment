import { Loader } from "lucide-react";

function TodoSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="mb-4 bg-[#151515] text-[#d4d4d4] sm:max-w-72 px-4 h-40 rounded-lg flex items-center"
        >
          <Loader className="animate-spin mx-auto"/>
        </div>
      ))}
    </div>
  );
}

export default TodoSkeleton;
