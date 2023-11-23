import { Box } from '@mui/material'
import ModeButton from './ModeButton'
import LanguageSelectBox from './LanguageSelectBox'

const RightMenu = () => {
  return (
    <>
      <Box padding={'0.5rem'}>
        <p>Mode</p>
        <ModeButton></ModeButton>
      </Box>
      <Box padding={'0.5rem'}>
        <p>Language</p>
        <LanguageSelectBox></LanguageSelectBox>
      </Box>
    </>
  )
}

export default RightMenu
