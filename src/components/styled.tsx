import styled from "styled-components"
import { Status } from "../types/index.js"

export const WelcomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
`

export const H1 = styled.h1`
  color: #cdcdcd;
  font-size: 36;
  font-weight: bold;
`

export const H3 = styled.h3<{ status?: string }>`
  color: ${props => {
    if (props.status === "easy") {
      return "#008000"
    } else if (props.status === "medium") {
      return "#ffff00"
    } else if (props.status === "hard") {
      return "#ff0000"
    }
    return "#cdcdcd"
  }};
  font-size: 24;
  font-weight: bold;
`

export const DangerousErrorText = styled.h1`
  font-size: 36;
  font-weight: bold;
  color: red;
`

export const Container = styled.div<{ tofullscreen?: boolean; rounded?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${props => (props.rounded ? "50em" : "")};
  margin: ${props => (props.rounded ? "20px 0 0 0" : "0")};
  height: ${props => (props.tofullscreen ? "100vh" : "100%")};
  border: ${props => (props.rounded ? "1px solid #fff" : "")};
  padding: ${props => (props.rounded ? "20px 10px" : "0")};
  border-radius: ${props => (props?.rounded ? "10%" : "0")};
  gap: 40px;
`

export const QuestionNumbers = styled.div`
  display: flex;
  gap: 20px;
`

export const QuestionNumber = styled.span<{ status: string }>`
  backgroung: transparent;
  box-shadow: "0 4px 4px white";
  color: ${props => (props.status === "active" ? "#fff" : "#2B2B2B")};
`

export const Button = styled.button<{ active?: boolean }>(props => ({
  background: props.active ? "#FFFFFF" : "#5F5F5F",
  color: "#1C1C1C",
  padding: "16px 32px",
  fontSize: 18,
  borderRadius: 40,
  boxShadow: props.active ? "0 4px 4px white" : "",
}))

export const RadioContainer = styled.label`
  color: #cdcdcd;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding-left: 44px;

  input[type="radio"] {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
  }
`

export const RadioSpan = styled.span<{
  status: Status
}>`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0e0e0e;
  box-shadow: ${props => {
    if (props.status === "success") {
      return "5px 5px 40px green"
    } else if (props.status === "error") {
      return "10px 0px 60px red"
    } else if (props.status === "default") {
      return ""
    }
  }};
`

export const RadioSpanInner = styled.span<{
  active: boolean
}>`
  width: 8px;
  height: 8px;
  background: ${props => (props.active ? "#fff" : "#000")};
  border-radius: 50%;
  box-shadow: ${props => (props.active ? "0px 0px 8px white" : "")};
`
export const Label = styled.div<{
  status?: Status
}>`
  text-decoration: ${props => {
    if (props.status === "success") {
      return ""
    } else if (props.status === "error") {
      return "line-through"
    } else if (props.status === "default") {
      return ""
    }
  }};
`

export const CheckboxSpan = styled.span<{
  status: Status
}>`
  height: 30px;
  width: 30px;
  border-radius: 15%;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0e0e0e;
  box-shadow: ${props => {
    if (props.status === "success") {
      return "5px 5px 40px green"
    } else if (props.status === "error") {
      return "10px 0px 60px red"
    } else if (props.status === "default") {
      return ""
    }
  }};
`

export const CheckboxContainer = styled.label<{ status?: Status }>`
  color: #cdcdcd;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  padding-left: 44px;

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
  }
`
