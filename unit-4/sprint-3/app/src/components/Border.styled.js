import styled from 'styled-components'

export const Border = styled.div`
  // background: transparent;
  // border-radius: 3px;
  // border: 2px solid palevioletred;
  // color: palevioletred;
  // // margin: 0 1em;
  // // padding: 0.25em 1em;
  background-color:${(props)=>props.color}
`