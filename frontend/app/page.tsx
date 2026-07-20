import Nav from "./nav/page";
import Home from "./home/page";

export default function Page() {
  return (
    <main className="relative w-full">
      <img src="/component/10.png" alt="Background" className="w-full h-auto opacity-85" />
      <div className="absolute top-0 left-0 w-full">
        <Nav />
        <div className="">
          <img src="/component/11.png" alt="book" className="w-90"/>
        <Home/>
        </div>
      </div>
    </main>
  );
}
