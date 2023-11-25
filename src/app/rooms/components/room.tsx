import Link from "next/link";

export default function Room(props: {
  name: string;
}) {
  const { name } = props;
  return (
    <Link
      href={`/rooms/${name}`}
      target="_self"
      className="w-full p-3 rounded-md bg-light-accent2/50 dark:bg-dark-accent2/50"
    >
      {name}
    </Link>
  );
}
