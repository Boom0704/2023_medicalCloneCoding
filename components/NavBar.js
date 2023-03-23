import Link from "next/link";
import { useRouter } from "next/router";
import { ImFacebook, ImBlogger, BsInstagram, ImWhatsapp  } from "react-icons/all";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <p className={router.pathname === "/" ? "active" : ""}>Home</p>
        </Link>

        <div>
          <Link href="/intro">
            <p className={router.pathname === "/intro" ? "active" : ""}>회사소개</p>
          </Link>
          <Link href="/product">
            <p className={router.pathname === "/product" ? "active" : ""}>제품소개</p>
          </Link>
          <Link href="/used">
            <p className={router.pathname === "/used" ? "active" : ""}>중고제품매입</p>
          </Link>
          <Link href="/service">
            <p className={router.pathname === "/service" ? "active" : ""}>서비스센터</p>
          </Link>
          <Link href="/customer">
            <p className={router.pathname === "/customer" ? "active" : ""}>고객지원</p>
          </Link>
        </div>

        <div>
          <Link href="/">
            <p className={router.pathname === "/" ? "active" : ""}>Kor</p>
          </Link>
          <Link href="/">
            <p className={router.pathname === "/Eng" ? "active" : ""}>Eng</p>
          </Link>
          <Link href="/">
            <p className={router.pathname === "/Jpn" ? "active" : ""}>Jpn</p>
          </Link>
        </div>

        <div>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><p><ImWhatsapp/></p></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><p><BsInstagram/></p></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><p><ImFacebook/></p></a>
                <a href="https://blog.naver.com/playonu" target="_blank" rel="noopener noreferrer"><p><ImBlogger/></p></a>
        </div>
        
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
