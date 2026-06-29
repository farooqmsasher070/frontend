type Props = {
  name: string;
  emoji: string;
  color: string;
};

export default function CategoryCard({
  name,
  emoji,
  color,
}: Props) {
  return (
    <div
      className={`${color}
      rounded-2xl
      p-8
      text-center
      cursor-pointer
      transition
      hover:scale-105
      hover:shadow-xl`}
    >
      <div className="text-5xl">{emoji}</div>

      <h3 className="mt-4 text-xl font-bold">
        {name}
      </h3>
    </div>
  );
}