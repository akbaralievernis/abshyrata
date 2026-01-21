export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">AUB-1-24 Group Portfolio</h3>
          <p className="text-sm text-slate-300">
            Official academic portfolio for the Department of Applied Informatics and
            Information Security (PIiIB), MFTIT Institute, Osh State University.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Contact</p>
          <p>Osh State University, Osh, Kyrgyz Republic</p>
          <p>group.aub124@oshsu.edu</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Quick Links</p>
          <p>Students · News · Trips · Dashboard · Admin</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        © 2025 AUB-1-24 · Osh State University · MFTIT Institute · PIiIB Department
      </div>
    </footer>
  );
}
