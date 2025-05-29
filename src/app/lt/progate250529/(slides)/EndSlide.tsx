"use client"

import { useEffect, useState } from "react"
import { Column, Container, Image, SlideBase, TitleText } from "react-slide-craft"
import { ThanksAnimation } from "@/components/animation/ThanksAnimation"
import QRImage from "@/assets/hasuro_qr.png"

export const EndSlide = () => {
  const [isQR, setIsQR] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQR(true)
    }, 9000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SlideBase textColor="var(--text-color-light)" backgroundColor="var(--bg-color-dark">
      <Column align="center" crossAlign="center" gap="3xl">
        <Container
          width="auto"
          height="45%"
          cornerRadius={1000}
          border={{
            width: 4,
            color: "#ffffff",
            style: "solid",
          }}
          containerStyle={{ aspectRatio: "1/1" }}
        >
          <div className="w-[70%]">
            {isQR ? (
              <Image src={QRImage.src} alt="qr" />
            ) : (
              <ThanksAnimation />
            )}
          </div>
        </Container>
        <TitleText text="HASURO" />
      </Column>
    </SlideBase>
  )
}
