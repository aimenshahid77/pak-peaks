export default function Footer() {
  const columns = [
    {
      heading: "Explore",
      links: [
        "Hunza Valley",
        "Skardu",
        "Naran Kaghan",
        "Fairy Meadows",
        "K2 Base Camp",
        "Khunjerab Pass",
      ],
    },
    {
      heading: "Tours",
      links: [
        "Tours on Wheels",
        "Tours on Foot",
        "Custom Itineraries",
        "Corporate Trips",
        "Photography Tours",
      ],
    },
    {
      heading: "Company",
      links: ["About Us", "Our Guides", "Safety Standards", "Reviews", "Contact"],
    },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-screen-xl px-8 py-12 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-white/5">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white">
                  <path
                    d="M2 20L8 9l4 6 3-4 5 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white">
                  Pak Peaks
                </p>
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                  Travels & Tours
                </p>
              </div>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-white/45">
              Boutique expeditions through Northern Pakistan, built for mountain
              roads, high trails, and thoughtful travel.
            </p>
          </div>

          {columns.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-white/60">
                {heading}
              </h4>
              <ul className="flex list-none flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/45 transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-[10px] text-white/35">
            Copyright {new Date().getFullYear()} Pak Peaks Travels & Tours.
          </p>
          <p className="text-[10px] text-white/35">Built for the mountains.</p>
        </div>
      </div>
    </footer>
  );
}
