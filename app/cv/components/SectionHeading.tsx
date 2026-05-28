type Props = {
  children: React.ReactNode;
};

export const SectionHeading = (props: Props) => {
  const { children } = props;

  return (
    <h2 className="border-b border-zinc-200 pb-2 text-xl font-semibold tracking-tight text-zinc-900 dark:border-zinc-800 dark:text-zinc-50">
      {children}
    </h2>
  );
};
