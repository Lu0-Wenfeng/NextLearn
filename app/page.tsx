import Image from "next/image";
import cat from "@/public/images/cat.jpeg";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image src={cat} alt="cat" />
      <Image
        src="https://bit.ly/react-cover"
        alt="react-cover"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={75}
        priority
      />
    </main>
  );
}
