'use client'

import { setLanguage } from '@/reducers/Application.Reducer'
import { Language } from '@/types/Application.Type'
import { LanguageSelectBoxClientProps } from '@/types/components/SelectBox/Language.Type'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function LanguageSelectBoxClient({ params, action }: LanguageSelectBoxClientProps) {
  const { languages } = params
  const { language } = useSelector(({ application }) => application)
  const [lang, setLang] = useState<Language>(language)
  const dispatch = useDispatch()
  const ChangeLanguageCallback = useCallback(
    async (language: Language) => {
      dispatch(setLanguage(language))
      setLang(language)
      action({ language })
    },
    [action, dispatch]
  )
  return (
    <FormControl fullWidth>
      <InputLabel id="language-select-label">{'Language'}</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={lang}
        label="Language"
        onChange={(e) => ChangeLanguageCallback(e.target.value as Language)}
      >
        {languages.map(({ value, text }, index) => {
          return (
            <MenuItem key={index} value={value}>
              {text}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
