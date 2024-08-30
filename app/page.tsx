import Image from "next/image";

//Importing Components
import Header from "@/components/Header";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <div>
        {/* Header */}
        <Header></Header>
        {/* About */}
        <div className="mt-10 mb-20">
          <About></About>
        </div>
      </div>
    </>
  );
}
