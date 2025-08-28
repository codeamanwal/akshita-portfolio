
export default function Video(): React.ReactNode {
  return (
    <div className="relative w-full h-[100vh]">
    <video width="100%" height="100%" controls>
      <source src="/boop.gif" type="gif" />
    </video>
    </div>
  );
}
