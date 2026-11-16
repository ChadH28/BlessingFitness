import Image from "next/image";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function PriceCard({
  image,
  imageAlt = "",
  title,
  description,
  pricinglist = [],
}) {
  const enquiryLink = createWhatsAppLink(
    `Hi Total Blessing, I'm interested in ${title}. Could you please share more details?`
  );

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-paper shadow-[0_16px_44px_rgba(23,32,29,0.07)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-foreground/10">
        {image && (
          <Image
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            src={image}
            alt={imageAlt}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-foreground md:text-2xl">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-foreground/65">
            {description}
          </p>
        )}
        {pricinglist.length > 0 && (
          <ul className="mt-5 space-y-3">
            {pricinglist.map((pricing, index) => (
              <li
                key={`${pricing.price}-${pricing.description}-${index}`}
                className="flex items-baseline justify-between gap-3 border-t border-foreground/10 pt-3"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
                  {pricing.description}
                </span>
                <strong className="shrink-0 text-xl font-black text-tertiary">
                  {pricing.price}
                </strong>
              </li>
            ))}
          </ul>
        )}
        <a
          href={enquiryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 w-full"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}
