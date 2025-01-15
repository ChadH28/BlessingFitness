import { default as Image } from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="px-[50px] max-[1024px]:px-[20px] py-10 flex gap-6 flex-wrap">
        <div className="w-full flex justify-between items-center">
          <Link href={"/"} className="logo-container content-center flex">
            <Image
              width={80}
              height={80}
              alt="fn rangers logo"
              src={"/logo/FN-Rangers.png"}
            />
          </Link>
          <div className="socials-container justify-center content-center flex gap-1">
            <Link
              target="_blank"
              href={"https://www.facebook.com/groups/fn.rangers.st.agnes.fc/"}
              className="w-5 h-5 rounded-full relative overflow-hidden"
            >
              <Image
                fill
                style={{ objectFit: "cover" }}
                alt="fn rangers logo"
                src={"/logo/fbl.svg"}
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/fn_rangers_st_agnes_fc/"}
              className="w-5 h-5 rounded-full relative overflow-hidden"
            >
              <Image
                fill
                style={{ objectFit: "cover" }}
                alt="fn rangers logo"
                src={"/logo/igl.svg"}
              />
            </Link>
          </div>
        </div>
        <hr className="w-full" />
        <div className="copyright w-full flex justify-center content-center">
          <p>© 2025. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
