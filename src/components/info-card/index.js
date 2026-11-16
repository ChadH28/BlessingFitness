/* eslint-disable @next/next/no-img-element */
export default function InfoCard({
  image,
  alt,
  title,
  content,
  buttonlink,
  buttonlabel,
  greyscale,
  background,
  textc,
  video,
  external,
  cover,
  animate,
}) {
  return (
    <div
      className={`flex ${
        alt ? "flex-row-reverse" : "flex-row"
      } max-[1024px]:flex-col h-fit`}
    >
      {video ? (
        <div className={`lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bento-shadow ${!cover&&"bg-black"}`}>
          <video
            className={`object-${
              cover ? "cover" : "contain"
            } lg:h-[21.875rem] h-inherit h-96 w-screen`}
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div
          className={`relative
image-container overflow-hidden lg:min-h-[25rem] md:min-h-[21.875rem] min-h-80 h-full lg:w-1/2 w-full`}
        >
          <img
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${greyscale?"grayscale":""} hover:scale-105`}
            src={image??""}
            alt="BFT descriptive card"
            sizes="(max-width: 1024px) 75vw, 100vw"
            fetchPriority="low"
          />
        </div>
      )}

      <div
        style={{background:background||'#ffffff',color:textc||'#171717'}}
        className={`content-container glass lg:col-span-7 rounded-2xl p-8 md:p-12 ${background?`bg-[${background}]`:"bg-white"} flex flex-col gap-6 justify-center`}
      >
        <h2
          data-aos={animate&&(alt?"fade-right":"fade-left")}
          data-aos-delay="100"
          className={`whitespace-pre-line text-3xl font-extrabold uppercase tracking-tight leading-[0.95] ${textc?`text-[${textc}]`:"text-foreground"} md:text-4xl lg:text-5xl`}
        >
          {title}
        </h2>
        <p
          data-aos={animate&&(alt?"fade-right":"fade-left")}
          data-aos-delay="200"
          className={`max-w-[65ch] text-pretty text-base leading-relaxed ${textc?`text-[${textc}]`:"text-foreground/70"} md:text-xl`}
          style={{whiteSpace:"preserve-breaks"}}
        >
          {content}
        </p>
        {buttonlink&&(
          <div data-aos={animate&&(alt?"fade-right":"fade-left")} data-aos-delay="300">
            <a className="btn-primary inline-block rounded-full bg-tertiary px-6 py-3 text-xs font-bold uppercase tracking-wider text-white"
              href={buttonlink}
              target={external?"_blank":"_self"}
              rel={external?"noopener noreferrer":undefined}>
              {buttonlabel??"Find out more"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
