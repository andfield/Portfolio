
import React from "react"
import Typewriter from "typewriter-effect"
import styled from "styled-components"

const MyTitleMessage=styled.h1`
  position: absolute;
  width: 100%;
  top: 28rem;
  z-index: 1;
  margin-top: -105px;
  text-align: center;
  strong {
    font-size: 2em;
  }

  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 10px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 1.25em;
    }
    .sub {
      font-size: 37px;
      letter-spacing: 2px;
    }
    `

const TitleMessage=() => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Siddharth Thakur</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options= {{
              autoStart: true,
              loop: true
            }}
            onInit={(typewriter) => {

                typewriter
              
                  .pauseFor(500)
                  .typeString('I am a FullStack JavaScript')
                  .pauseFor(300)
                  .deleteChars(10)
                  .typeString('<span style="text-size:50px; color ; JS <span style="color: #27ae60;">web developer</span></strong>')
                  .pauseFor(1000)
                  .callFunction(() => {

                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted')
                  })
                  .start()

              
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
)

export default TitleMessage

