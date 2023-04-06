import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { FaFacebookF, FaBloggerB, FaInstagram, FaWhatsapp  } from "react-icons/fa";

export default function NavBar() {
  const router = useRouter();
  
  const [subMenus, setSubMenus] = useState({
    subMenu1: false,
    subMenu2: false,
    subMenu3: false,
    subMenu4: false,
    subMenu5: false
  });

  const showSubMenu = (num) => {
    setSubMenus({
      ...subMenus,
      [`subMenu${num}`]: true
    });
  };

  const hideSubMenu = (num) => {
    setSubMenus({
      ...subMenus,
      [`subMenu${num}`]: false
    });
  };


  
  return (
    <nav className={router.pathname === "/" ? "home" : ""}>

      <div className="linkMenu">
        <Link href="/">
          <img src="/vercel.svg" />
        </Link>

        <div className="linkTitle">
          <Link href="/intro"
            onMouseEnter={() => showSubMenu(1)}
            onMouseLeave={() => hideSubMenu(1)}>
            <p className={`intro ${router.pathname === "/intro" ? "active" : ""}`}>회사소개</p>
            {subMenus.subMenu1 && (
              <ul className="sub-menu">
                <Link href="/intro/company"><li>회사 소개</li></Link>
                <Link href="/intro/certification"><li>보유 인증</li></Link>
                <Link href="/intro/location"><li>위치 안내</li></Link>
              </ul>
            )}
          </Link>

          <Link href="/product"
            onMouseEnter={() => showSubMenu(2)}
            onMouseLeave={() => hideSubMenu(2)}>
            <p className={`product ${router.pathname === "/product" ? "active" : ""}`}>제품소개</p>
            {subMenus.subMenu2 && (
              <ul className="sub-menu">
                <Link href="/product"><li>다시 만들어</li></Link>
              </ul>
            )}
          </Link>

          <Link href="/used"
            onMouseEnter={() => showSubMenu(3)}
            onMouseLeave={() => hideSubMenu(3)}>
            <p className={`used ${router.pathname === "/used" ? "active" : ""}`}>중고제품매입</p>
            {subMenus.subMenu3 && (
              <ul className="sub-menu">
                <Link href="/used"><li>중고제품매입</li></Link>
              </ul>
            )}
          </Link>

          <Link href="/service"
            onMouseEnter={() => showSubMenu(4)}
            onMouseLeave={() => hideSubMenu(4)}>
            <p className={`service ${router.pathname === "/service" ? "active" : ""}`}>서비스센터</p>
            {subMenus.subMenu4 && (
              <ul className="sub-menu">
                <Link href="/service"><li>센터 소개</li></Link>
                <Link href="/service/repair"><li>수리 견적 문의</li></Link>
              </ul>
            )}
          </Link>
          <Link href="/customer"
            onMouseEnter={() => showSubMenu(5)}
            onMouseLeave={() => hideSubMenu(5)}>
            <p className={`customer ${router.pathname === "/customer" ? "active" : ""}`}>고객지원</p>
            {subMenus.subMenu5 && (
              <ul className="sub-menu">
                <Link href="/customer"><li>공지사항</li></Link>
                <Link href="/customer/contact"><li>CONTACT US</li></Link>
              </ul>
            )}
          </Link>
        </div>

        <div className="linkLang">
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

        <div className="linkOut">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><p><FaWhatsapp/></p></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><p><FaInstagram/></p></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><p><FaFacebookF/></p></a>
          <a href="https://blog.naver.com/playonu" target="_blank" rel="noopener noreferrer"><p><FaBloggerB/></p></a>
        </div>
        
      </div>
      <nav className="subNav">
      </nav>
      <style jsx>{`
        .sub-menu{
          position: absolute;
          border-top: solid;
          border-color: cornflowerblue;
        }
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          background-color: rgba(0, 0, 0, 0.7); 
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          z-index: 9999;
        }
        .home {
          background-color: rgba(0, 0, 0, 0.5); 
        }
        img {
          width: 200px;
          height: 100px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        .linkMenu{
          // position: absolute;
          display: flex;
          justify-content: space-between;
          padding-right: 50px;
          padding-left: 50px;
          width: 100%
        }
        .linkTitle p{
          padding: 20px;
          font-size: 22px;
        }
        .linkTitle li{
          padding-left: 20px;
          padding-right: 20px;
          padding-bottom: 6px;
          font-size: 18px;
          list-style-type: none;
        }
        .linkTitle li:hover{
          color: skyblue;
        }
        .linkLang p{
          padding: 5px;
          font-size: 22px;
        }
        .linkOut a{
          padding: 5px;
          font-size: 30px;
        }
        // .subNav{
        //   top: 100%;
        //   left: 0;
        //   width: 100%;
        //   height: 350px;
        //   padding: 10px;
        //   background-color: #000;
        //   box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
        //   z-index: 9999;
        // }
      `}</style>
    </nav>
  );
}
