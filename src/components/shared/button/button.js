import { default as MaterialButton } from '@mui/material/Button'
import styled from 'styled-components'
import { StyledEngineProvider } from '@mui/material/styles'
import constants from '../../../constants'

const StyledMaterialButton = styled(MaterialButton)`
  ${(props) => props.rounded && props.theme.rounded};
`

function Button({ children, variant = constants.buttonOutlined, rounded }) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <StyledMaterialButton variant={variant} rounded={rounded}>
          {children}
        </StyledMaterialButton>
      </StyledEngineProvider>
    </>
  )
}

export default Button
