import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="px-6 md:px-12">
        <div className="w-full">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/home/background.jpg"
              alt="Balanced zen stones representing harmony and focus"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}
