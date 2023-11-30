import { Box } from '@mui/material'
import ModeButton from './ModeButton'
import LanguageSelectBox from './LanguageSelectBox'
import { useTranslation } from 'react-i18next'

const RightMenu = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box padding={'0.5rem'}>
        <p>{t('Mode')}</p>
        <ModeButton></ModeButton>
      </Box>
      <Box padding={'0.5rem'}>
        <p>{t('Language')}</p>
        <LanguageSelectBox></LanguageSelectBox>
      </Box>
    </>
  )
}

export default RightMenu
