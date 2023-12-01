import { SetLanguage } from '@/lib/api/api'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GetCookie } from '@/lib/cookies'

const LanguageSelectBox = () => {
  const [lang, setLang] = useState('en')
  const { t, i18n } = useTranslation()

  const changeLanguageCallback = useCallback(
    async (language: string) => {
      console.log(language)
      await SetLanguage(language)
      document.documentElement.lang = language
      i18n.changeLanguage(language)
      setLang(language)
    },
    [i18n]
  )

  useEffect(() => {
    const getLangCookie = async function () {
      const langCookie = await GetCookie('language')
      const initialLang = langCookie ? langCookie.value : 'en'
      setLang(initialLang)
      // 初期読み込み時に言語切り替えも行う
      await changeLanguageCallback(initialLang)
    }

    getLangCookie()
  }, [changeLanguageCallback])

  return (
    <>
      <FormControl fullWidth className="SelectBox">
        <InputLabel id="language-select-label">{t('Language')}</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={lang}
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
