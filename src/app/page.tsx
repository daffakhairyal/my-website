import Hero from "@/components/Hero";
import Content1 from "@/components/Content1"
import Review from "@/components/Review";



export default function Home(){

  return(
    <section className="bg-black">
      <Hero/>
      <Content1/>
      <Review/>
    </section>
  )
}