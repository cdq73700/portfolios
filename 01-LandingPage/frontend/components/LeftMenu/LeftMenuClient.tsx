'use client'

import { ExpandLess, ExpandMore, Home } from '@mui/icons-material'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { useCallback, useEffect, useState } from 'react'
import { GetCookie } from '@/lib/cookies'
import { useTranslation } from 'react-i18next'

type Inbox = {
  icon: string
  text: string
}

type Props = {
  profile: string
  inbox: Array<Inbox>
}

export default function LeftMenuClient({ profile, inbox }: Props) {
  const { t } = useTranslation()
  const [lang, setLang] = useState('en')
  const [open, setOpen] = useState(true)

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
        <ListItemButton href={`/${lang}/profile`}>
          <ListItemIcon>
            <Home></Home>
          </ListItemIcon>
          <ListItemText primary={t(profile)}></ListItemText>
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {inbox.map(({ icon, text }, index) => {
              return (
                <ListItemButton key={index} style={{ paddingLeft: '2.5rem' }} href={`/${lang}/${text}`}>
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
