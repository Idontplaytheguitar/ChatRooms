export default function TypographyH1(props:{
    children: React.ReactNode
}) {
    const { children } = props
  return (
    <h1 className="mx-auto mt-32 my-5 self-center text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}
