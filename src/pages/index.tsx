import Link from "next/link"
export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/"}>Home</Link>
      <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/about"}>About Us</Link>
      <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/contact"}>Contact Us</Link>
      <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/privacypolicy"}>privacy policy</Link>

    </div>)


}
