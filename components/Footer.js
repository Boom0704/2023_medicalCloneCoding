import Link from "next/link";
import { useRouter } from "next/router";

export default function Seo() {
    const router = useRouter();
    return (
        <footer>
            <div className="table1">
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
            <div className="table2"><p>개인정보처리방침</p></div>
            <div className="table3">
                <p>주소 : This is a footer.</p>
                <p>팩스 : This is a footer.</p>
                <p>이메일 : This is a footer.</p>
                <p>사업자등록번호 : This is a footer.</p>
                <p>Copyright : This is a footer.</p>
            </div>
            <div className="table4">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><p>전화</p></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><p>인스타</p></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><p>페이스북</p></a>
                <a href="https://blog.naver.com/playonu" target="_blank" rel="noopener noreferrer"><p>블로그</p></a>
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
