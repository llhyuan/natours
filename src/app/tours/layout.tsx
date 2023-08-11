export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 py-8 sm:py-8 flex flex-col justify-center gap-y-6 md:gap-y-12 gap-x-12 sm:flex-row sm:flex-wrap items-center">
      {children}
    </div>
  );
}
