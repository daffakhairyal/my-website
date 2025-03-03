import Hero from "@/components/Hero";
import Content1 from "@/components/Content1"
import Review from "@/components/Review";
import Footer from "@/components/Footer";



export default function Home(){

  return(
    <section className="bg-black">
      <Hero/>
      <Content1/>
      <Review/>
      <Footer/>
    </section>
  )
}