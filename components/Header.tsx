export default function Header() {
  return (
    <header className="py-8 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-slate-900 text-2xl font-light tracking-tight">
          zwift<span className="text-blue-600">.</span>
        </div>
        <div className="flex items-center gap-12">
          <a
            href="https://docs.zwift.cash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Documentation
          </a>
          <a
            href="https://app.zwift.cash"
            className="group relative px-6 py-2.5 text-sm text-slate-900 transition-colors"
          >
            <span className="relative z-10">Launch App</span>
            <div className="absolute inset-0 transform translate-y-1.5 translate-x-1.5 bg-blue-600/10 rounded-lg transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
            <div className="absolute inset-0 border border-slate-900 rounded-lg" />
          </a>
        </div>
      </div>
    </header>
  );
}
