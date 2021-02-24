import React, {useEffect} from 'react'
import Typewriter from "typewriter-effect"
import styled from "styled-components"
import {useDencrypt} from 'use-dencrypt-effect'

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
  }
  @media only screen and (max-width: 540px){
    strong {
      font-size: 1.25em
    }
    div .main{
      font-size: 1.25em
    }
  }
`
//Dencrypt values
const values=["Programmer", "Web Developer", "Artist", "Learner"]

const Title=() => {

  const {result, dencrypt}=useDencrypt()

  useEffect(() => {

    let i=0

    const action=setInterval(() => {

      dencrypt(values[i])

      i=i===values.length-1? 0:i+1
    }, 3000)

    return () => clearInterval(action)

  }, [])

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
            {result}
          </div>
        </div>
      </div>
    </MyTitleMessage>

  )

}

export default Title
