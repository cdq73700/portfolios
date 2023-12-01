'use client'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { useTranslation } from 'react-i18next'
import { GetCookie } from '@/lib/cookies'

const LeftMenu = () => {
  const { t } = useTranslation()
  const [lang, setLang] = useState('en')
  const [open, setOpen] = useState(true)

  const list = useMemo(() => {
    return [
      { icon: '🐈', text: 'cat' },
      { icon: '🐶', text: 'dog' },
    ]
  }, [])

  useEffect(() => {
    const getLangCookie = async function () {
      const lnagCookie = await GetCookie('language')
      setLang(lnagCookie ? lnagCookie.value : 'en')
    }

    getLangCookie()
  }, [])

  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <>
      <List className="SideMenuList">
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {list.map(({ icon, text }, index) => {
              return (
                <ListItemButton
                  key={index}
                  style={{ paddingLeft: '2.5rem' }}
                  href={`/${lang}/${text}`}
                >
                  <ListItemIcon>
                    <Box>{icon}</Box>
                  </ListItemIcon>
                  <ListItemText primary={t(text)} />
                </ListItemButton>
              )
            })}
          </List>
        </Collapse>
      </List>
    </>
  )
}

export default LeftMenu
