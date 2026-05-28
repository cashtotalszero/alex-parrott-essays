import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export const PrimaryLink = (props: Props) => {
  const { href, label } = props;

  return (
    <Link
      href={href}
      className="relative inline-flex w-54 items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-lg font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
    >
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="absolute right-5 top-1/2 size-4 -translate-y-1/2"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};
