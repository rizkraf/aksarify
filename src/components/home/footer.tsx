export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Aksarify. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
