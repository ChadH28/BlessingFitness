export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/80 py-16 backdrop-blur-xl md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <strong className="text-sm font-semibold uppercase tracking-wider text-tertiary">Our Address</strong>
            <span className="block h-4" />
            <a
              target="_blank"
              href="https://www.google.com/maps/dir/-33.91039,18.50459/277+Main+Rd,+Sea+Point,+Cape+Town,+8060/@-33.9151888,18.3681501,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1dcc673aef9ff6e5:0xfdae4c917b53c398!2m2!1d18.3940621!2d-33.9111697?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D"
              className="mt-3 text-sm leading-relaxed text-foreground/70 transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary"
            >{`277 Main Rd, Seapoint,\n Cape Town,\n 8060`}</a>
          </div>
          <div>
            <strong className="text-sm font-semibold uppercase tracking-wider text-tertiary">Contact Us</strong>
            <span className="block h-4" />
            <a
              href="tel:+27787589451"
              className="mt-3 text-sm leading-relaxed text-foreground/70 transition-colors duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-tertiary"
            >{`(+27) 78-758-9451`}</a>
          </div>
          <div>
            <strong className="text-sm font-semibold uppercase tracking-wider text-tertiary">Schedules</strong>
            <p className="text-balance whitespace-pre-line">{`Mon - Fri :- 7:30am - 7:30pm\nSat :- 7:00am - 2:00pm`}</p>
          </div>
        </div>
        <div className="mt-16 border-t border-foreground/10 pt-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-foreground/50">© 2025 Total Blessing Fitness & Travel Tours. All rights reserved.</p>
        </div>
      </div>
      </footer>
  );
}
