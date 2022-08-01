import React from 'react'
import './footer.css'

function Footer(){
  return(
    <footer>
      <div>
      <ul>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">영상정보처리기기운영・관리 방침</a></li>
            <li><a href="#">입점문의</a></li>
        </ul>

        <dl>
            <dt>사업자등록번호:</dt>
            <dd>201-81-32195</dd>
            <dt>대표이사:</dt>
            <dd>차정호</dd>
            <dt>주소 :</dt>
            <dd>서울특별시 중구 소공로63, (충무로 1가)</dd>
            <dt>대표 전화번호 :</dt>
            <dd>
                <a href="tel:02-1601-5932">1601-5932</a>
            </dd>
            <dt> <br/>대표 이메일주소 :</dt>
            <dd>
                <a href="mailto:chicor_com &#64; shinsegae.com">chicor_com &#64; shinsegae.com</a>
            </dd>
            <dt>통신판매업신고번호</dt>
            <dd>1996-서울중구-0211</dd>
            <dt>개인정보보호 책임자:</dt>
            <dd>이아무개 담당</dd>
        </dl>

        <ul>
            <li>
                <a href="#"><img src="./main images/icon-01.png" alt="트위터"/></a></li>
            <li>
                <a href="#"><img src="./main images/icon-02.png" alt="페이스북"/></a></li>
            <li>
                <a href="#"><img src="./main images/icon-03.png" alt="구글+"/></a></li>
            <li>
                <a href="#"><img src="./main images/icon-04.png" alt="인스타그램"/></a></li>
        </ul>
        <small>&copy; 2022 SHINSEGAE ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}

export default Footer