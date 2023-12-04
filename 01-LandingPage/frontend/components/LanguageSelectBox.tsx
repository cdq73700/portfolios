'use client'
import { SetLanguage } from '@/lib/api/api'
import { GetCookie } from '@/lib/cookies'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function GetLang() {
  const GetLangCookie = async function () {
    const cookie = await GetCookie('language')
    if (!cookie) {
      return 'en'
    }
    return cookie.value
  }
  return GetLangCookie()
}

function LanguageSelectBox() {
  const [lang, setLang] = useState('en')
  const { t, i18n } = useTranslation()

  const ChangeLanguageCallback = useCallback(
    async (language: string) => {
      await SetLanguage(language)
      i18n.changeLanguage(language)
      setLang(language)
    },
    [i18n]
  )

  useEffect(() => {
    const fnc = async function () {
      const res = await GetLang()
      setLang(res)
    }
    fnc()
  }, [])

  return (
    <>
      <FormControl fullWidth className="SelectBox">
        <InputLabel id="language-select-label">{t('Language')}</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={lang}
          label="Language"
          onChange={(e) => ChangeLanguageCallback(e.target.value)}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'ja'}>日本語</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default LanguageSelectBox
