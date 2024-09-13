// pages/index.js
'use client'
import Link from 'next/link';
import { useRouter } from "next/navigation"

function Header() {
  
  return <h1>Welcome to Our Site</h1>;
}

function HomePage() {
  
  const router = useRouter();
  const handleBtn = () => {
    router.push("/about")
  }
  return (
    <div>
      <Header />
      <ul>
        {/* navigtion by link */}
        <Link href={"/about"}>About</Link>
        <li><a href="/admin">Admin</a></li>
        {/* navigtion by router */}
        <li><button onClick={()=>handleBtn()}>About2</button></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default HomePage;
