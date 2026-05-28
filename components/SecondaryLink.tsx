import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export const SecondaryLink = (props: Props) => {
  const { href, label } = props;

  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-2.5 text-medium font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 w-36 justify-center"
    >
      {label}
    </Link>
  );
};
