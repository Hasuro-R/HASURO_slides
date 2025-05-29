import Link from "next/link"
import Logo from "@/assets/HASURO_blog_logo_dark.png"
import Image from "next/image"

export function Header() {
  return (
    <div
      className="w-full h-[60px] fixed top-0 left-0 right-0 z-10"
      style={{backgroundColor: 'rgba(var(--background-theme-color), 0.8)'}}
    >
      <div className="w-full h-full flex items-center justify-between px-[12px]">
        <div className="h-[60%] flex items-center justify-center">
          <Link href='/' className="w-auto h-full">
            <Image src={Logo} alt='logo' className='w-auto h-full' width={150} />
          </Link>
        </div>
        {/* <ColorThemeChangeButton /> */}
      </div>
    </div>
  )
}
