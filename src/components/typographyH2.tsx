export default function TypographyH1(props: {
  children: React.ReactNode;
}) {
  const { children } = props;
  return (
    <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}
