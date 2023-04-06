import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebookF, FaBloggerB, FaInstagram, FaWhatsapp  } from "react-icons/fa";
export default function Footer() {
    const router = useRouter();
    return (
        <footer>
            <div className="table1">
                <Link href="/intro">
                    <p>회사소개</p>
                </Link>
                <Link href="/product">
                    <p>제품소개</p>
                </Link>
                <Link href="/used">
                    <p>중고제품매입</p>
                </Link>
                <Link href="/service">
                    <p>서비스센터</p>
                </Link>
                <Link href="/customer">
                    <p>고객지원</p>
                </Link>
            </div>
            <div className="table2"><p>개인정보처리방침</p></div>
            <div className="table3">
                <p>주소 : This is a footer.</p>
                <p>팩스 : This is a footer.</p>
                <p>이메일 : This is a footer.</p>
                <p>사업자등록번호 : This is a footer.</p>
                <p>Copyright : This is a footer.</p>
            </div>
            <div className="table4">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><p><FaWhatsapp/></p></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><p><FaInstagram/></p></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><p><FaFacebookF/></p></a>
                <a href="https://blog.naver.com/playonu" target="_blank" rel="noopener noreferrer"><p><FaBloggerB/></p></a>
            </div>

            <style jsx>{`
                footer {
                    background : #d3d3d3;
                    display: grid;
                    grid-template-columns: 8fr 1fr;
                    grid-template-rows: 1fr 2fr;
                }
                footer div {
                    margin: 2 10%;
                    margin-left: 100px;
                    margin-right: 100px;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    display: flex;
                }

                p, span{
                    color : black;
                }
                .table1{
                    justify-content: space-between;
                    font-size: 24px;
                }
                .table2{
                    display: inline-block;
                    white-space: nowrap;
                }
                .table3{
                }
                .table4{
                }

                .table3 p {
                    display: inline-block; /* <p> 요소를 한 줄에 표시 */
                    margin: 0; /* 여분의 margin 제거 */
                    width: auto; /* 필수적으로 <p> 요소는 자신의 영역 크기 가짐 */
                  }
                  
                .table3:after {
                    content: ""; /* 가상 요소로 표시되는 내용 없음 */
                    display: block; /* 한 줄 차지 */
                    clear: both; /* float 해제 */
                  }
                  
                .table3 p:not(:last-child):after {
                    content: "ㅤㅤ|ㅤㅤ"; /* <p> 요소 사이에 " | " 문자열 추가 */
                  }
            `}</style>
        </footer>
    );
}
