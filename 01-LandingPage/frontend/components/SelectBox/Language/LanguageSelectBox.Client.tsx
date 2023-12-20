'use client'

import { Language } from '@/types/Application.Type'
import { LanguageSelectBoxClientProps } from '@/types/components/SelectBox/Language.Type'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@/styles/components/SelectBox/Language.Stales.module.css'

export default function LanguageSelectBoxClient({ params, action }: LanguageSelectBoxClientProps) {
  const { languages } = params
  const { i18n } = useTranslation()
  const [lang, setLang] = useState(i18n.language)
  const { SelectBox } = styles
  const ChangeLanguageCallback = useCallback(
    async (language: Language) => {
      setLang(language)
      action({ language })
    },
    [action]
  )
  return (
    <FormControl fullWidth className={SelectBox}>
      <InputLabel id="language-select-label">Language</InputLabel>
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
              <span>{text}</span>
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
