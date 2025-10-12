export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner com a cor dourada da ARCO */}
        <div className="w-16 h-16 border-4 border-[#CE9C5D] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">Carregando...</p>
      </div>
    </div>
  );
}