import Project from "./Project";
import Service from "./Service";

export default function Content1(){
    return(
        <section className="flex flex-col items-center h-full w-full bg-white relative overflow-hidden">
        <Service/>
        <Project/>
        </section>
    )
}