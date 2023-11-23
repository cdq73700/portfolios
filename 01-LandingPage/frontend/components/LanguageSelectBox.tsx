import { setLanguage } from '@/reducers/window.reducer'
import { Language } from '@/types/window.type'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LanguageSelectBox = () => {
  const { language } = useSelector(({ window }) => window)
  const dispatch = useDispatch()

  const changeLanguageCallback = useCallback(
    (language: Language) => {
      switch (language) {
        case 'ja':
          dispatch(setLanguage('ja'))
          document.documentElement.lang = 'ja'
          break
        case 'en':
          dispatch(setLanguage('en'))
          document.documentElement.lang = 'en'
          break
        default:
          dispatch(setLanguage('en'))
          document.documentElement.lang = 'en'
          break
      }
    },
    [dispatch]
  )
  return (
    <>
      <FormControl fullWidth className="SelectBox">
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={language}
          label="Language"
          onChange={(e) => changeLanguageCallback(e.target.value)}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'ja'}>日本語</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default LanguageSelectBox
