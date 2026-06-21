export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 w-full">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <strong className="text-sm font-bold uppercase tracking-wider text-[#dc2626]">
              Our Address
            </strong>
            <br />
            <a
              target="_blank"
              href="https://www.google.com/maps/dir/-33.91039,18.50459/277+Main+Rd,+Sea+Point,+Cape+Town,+8060/@-33.9151888,18.3681501,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1dcc673aef9ff6e5:0xfdae4c917b53c398!2m2!1d18.3940621!2d-33.9111697?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D"
              className="text-sm text-gray-600 hover:text-[#dc2626] transition-colors whitespace-pre-line"
            >{`277 Main Rd, Seapoint,\n Cape Town,\n 8060`}</a>
          </div>
          <div className="space-y-2">
            <strong className="text-sm font-bold uppercase tracking-wider text-[#dc2626]">
              Contact Us
            </strong>
            <br />
            <a
              href="tel:+27787589451"
              className="text-sm text-gray-600 hover:text-[#dc2626] transition-colors"
            >{`(+27) 78-758-9451`}</a>
          </div>
          <div className="space-y-2">
            <strong className="text-sm font-bold uppercase tracking-wider text-[#dc2626]">
              Schedules
            </strong>
            <p className="text-sm text-gray-600 whitespace-pre-line">{`Mon - Fri: 7:30am - 7:30pm\nSat: 7:00am - 2:00pm`}</p>
          </div>
        </div>
        <hr className="w-full border-gray-200 my-8" />
        <div className="flex justify-center">
          <p className="text-sm text-gray-400">© 2025 Total Blessing Fitness & Travel Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
