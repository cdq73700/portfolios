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
import { useCallback, useState } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { useSelector } from 'react-redux'
import { Language } from '@/types/window.type'
import { useTranslation } from 'react-i18next'

const LeftMenu = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const { language }: { language: Language } = useSelector(
    ({ window }) => window
  )

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
            <ListItemButton
              style={{ paddingLeft: '2.5rem' }}
              href={`/${language}/cat`}
            >
              <ListItemIcon>
                <Box>🐈</Box>
              </ListItemIcon>
              <ListItemText primary={t('cat')} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  )
}

export default LeftMenu
