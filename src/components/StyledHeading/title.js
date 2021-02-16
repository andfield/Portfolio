import React from 'react'
import Typewriter from "typewriter-effect"
import styled from "styled-components"
import './styles.css'

const MyTitleMessage=styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -105px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 10px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`

const Title=() => {

    return (

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
                            options={{
                                strings: ["Web Developer", "Coach", "Learner"],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </div>
                </div>
            </div>
        </MyTitleMessage>

    )

}

export default Title
