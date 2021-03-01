
import React from "react"
import Typewriter from "typewriter-effect"
import styled from "styled-components"
import {Fade, Slide} from 'react-reveal'

const MyTitleMessage=styled.h1`

  @media only screen and (max-width: 540px ){
    
    .main {
      font-size: 0.8em !important;
      margin-bottom: -25px !important;
    }
    .name{
      font-size: 1.5em !important
    }
    .sub {
      font-size: 0.4em !important;
    }
    .sub-a{
      font-size: 0.6em !important;
    }

    top: 20rem

  }

  position: absolute;
  width: 100%;
  top: 25rem;
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

    .name{
      font-size: 2em;
    }
    `

const TitleMessage=() => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center">
          <Fade className="text-center sub-a" left> Hi, I am</Fade>

          <span>
            <Fade right >
              <h1 className="name">
                Siddharth Thakur
              </h1>
            </Fade>

          </span>

        </div>
        <br />
        <div className="sub">
          <Typewriter
            options={{
              autoStart: true,
              loop: true
            }}
            onInit={(typewriter) => {

              typewriter

                .pauseFor(500)
                .typeString('A FullStack JavaScript')
                .pauseFor(300)
                .deleteChars(10)
                .typeString('<strong style="color:#d60068; text-size: 40px;"> JS </strong> <span>developer</span></strong>')
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

