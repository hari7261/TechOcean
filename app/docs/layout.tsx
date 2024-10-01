export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12 lg:py-16 w-full">
      {/* Wrapper for centering content and limiting max-width */}
      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-5xl px-4 md:px-8 lg:px-12 text-center">
        {children}
      </div>
    </section>
  );
}
