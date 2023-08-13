export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-y-12">
      {children}
    </div>
  );
}
