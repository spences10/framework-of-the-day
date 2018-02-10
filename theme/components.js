import styled from 'styled-components'

export const FrameworkInput = styled.input.attrs({
  type: props => props.type || 'text',
  placeholder: props => props.placeholder
})`
  margin: 0rem 0.5rem;
  padding: 0rem 0.5rem;

  grid-area: ${props => props.area};
  width: 100%;
  text-align: center;

  font-family: Roboto;
  font-size: 1rem;

  border: 1px dashed ${props => props.theme.white};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.white};
  border-radius: 2px;
`

export const FrameworkSelect = styled.select`
  margin: 0rem 0.5rem;
  padding: 0rem 0.5rem;

  grid-area: s;
  width: 100%;
  text-align: center;

  font-family: Roboto;
  font-size: 1rem;

  border: 1px dashed ${props => props.theme.white};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.white};
  border-radius: 2px;
`

export const FrameworkSelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`

export const FrameworkDescription = styled.textarea.attrs({
  placeholder: props => props.placeholder || 'Framework Desc'
})`
  margin: 0rem 0.5rem;
  padding: 0rem 0.5rem;

  grid-area: d;
  width: 100%;
  text-align: center;
  resize: none;

  font-family: Roboto;
  font-size: 1rem;

  border: 1px dashed ${props => props.theme.white};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.white};
  border-radius: 2px;
`

export const StyledButton = styled.button`
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  cursor: pointer;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.black};
  border-radius: 4px;
`
