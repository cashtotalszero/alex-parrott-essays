export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl items-center justify-end px-6 py-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {year} Alex Parrott
        </p>
      </div>
    </footer>
  );
}
