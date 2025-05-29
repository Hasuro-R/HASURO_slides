"use client"

export const AnimationContainer = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="w-full flex align-center justify-center">
      {children}
    </div>
  )
}
