export default function Glow({ color }: { color: string }) {
  return (
    <div
      className={`absolute right-0 top-0 size-96 bg-[radial-gradient(circle_190px,_theme(colors.${color}.500),_theme(colors.background))]`}
    />
  );
}
