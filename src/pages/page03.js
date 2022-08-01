import React from 'react'
import './mainpage.css'

function Page03(){
  return(
    <>
    <article id="box05">
    <div>
        <section>
            <h3>Event</h3>
            <p>I paint the world.</p>
        </section>
        <form action="#" method="post">
            <fieldeset>
                <legend  className="hide">이벤트폼</legend>
                <ul>
                    <li>
                        <label for="userName">이름</label>
                        <input type="text" 
                                id="userName"  
                                placeholder="자신의 이름을 입력하세요."
                                required/>
                    </li>
                    <li>
                        <label for="userEmail">Email</label>
                        <input type="email" id="userEmail"
                                placeholder="필수입니다."
                                required />
                    </li>
                </ul>

                <p>
                    <input type="submit" value="submit" />
                </p>
            </fieldeset>
        </form>
    </div>
</article>
    </>
  )
}

export default Page03