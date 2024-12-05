// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  height: 300px;
  width: 90%;
  background-color: #383a4e;
  border: 0 solid;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 32px;
  color: #fff;
`
export const Para = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
`
export const InputElement = styled.input`
  height: 36px;
  width: 80%;
  border: 0 solid;
  outline: none;
  font-family: Roboto;
  font-size: 16px;
  background-color: #fff;
  padding-left: 18px;
`

export const ErrorMsg = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #ef4444;
`
