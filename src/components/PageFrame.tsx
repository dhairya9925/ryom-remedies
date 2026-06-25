export function PageFrame({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      src={src}
      title={title}
      className="block w-screen h-screen border-0"
    />
  );
}