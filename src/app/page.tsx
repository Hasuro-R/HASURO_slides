"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push("/me")
  }, [])

  return (
    <></>
    // <div className="w-full flex flex-col items-center justify-start">
    //   <div className="w-full flex flex-col items-start justify-start pt-[60px] max-w-[1100px]">
    //     <Header />
    //     <div className="w-full flex flex-col items-start justify-start gap-[60px] px-[20px]">
    //       <div className="w-full flex flex-col items-start justify-start gap-[60px] px-[20px]">
    //         <p className="text-[50px] font-bold">
    //           HASURO's <span className="bg-gradient-to-br from-[#58ba89] to-[#d8df00] bg-clip-text text-transparent">BLOG</span>
    //         </p>
    //         <p className="text-[30px] font-semibold">
    //           HASUROのブログです。ここは、HASUROが気まぐれに記事を投稿するだけのサイトです。
    //         </p>
    //         <a
    //           href="https://hasuro.com"
    //           className="text-[30px] font-semibold bg-gradient-to-br from-[#58ba89] to-[#d8df00] bg-clip-text text-transparent"
    //           target="_blank"
    //         >
    //           Read my profile<span className="pl-[10px] hover:pl-[10px]">→</span>
    //         </a>
    //       </div>
    //       {/* <Home client:load /> */}
    //     </div>
    //     {/* <Footer /> */}
    //   </div>
    // </div>
  )
}
