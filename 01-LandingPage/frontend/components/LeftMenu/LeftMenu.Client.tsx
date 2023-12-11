'use client'

import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useCallback, useContext, useState } from 'react'
import HeaderContext from '../Header/Header.Context'
import { useSelector } from 'react-redux'
import { LeftMenuClientProps, ListItemGroupProps, ListItemProps } from '@/types/components/LeftMenu.Type'

function ListItem({ params }: ListItemProps) {
  const { inbox, language } = params
  const { href, icon, value } = inbox
  return (
    <ListItemButton href={href ? href.replace('{language}', language) : ''}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={value}></ListItemText>
    </ListItemButton>
  )
}

function ListItemGroup({ params }: ListItemGroupProps) {
  const { inbox: paramInbox, language } = params
  const { icon, value, inbox } = paramInbox
  const [open, setOpen] = useState(false)
  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={value}></ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {inbox &&
            inbox.map(({ href, icon, value }, index) => {
              return (
                <ListItemButton
                  key={index}
                  style={{ paddingLeft: '2.5rem' }}
                  href={href ? href.replace('{language}', language) : ''}
                >
                  <ListItemIcon>
                    <Box>{icon}</Box>
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItemButton>
              )
            })}
        </List>
      </Collapse>
    </>
  )
}

export default function LeftMenuClient({ params }: LeftMenuClientProps) {
  const { list } = params
  const { anchor } = useContext(HeaderContext)
  const { language } = useSelector(({ application }) => application)
  if (anchor !== 'left') return <></>
  return (
    <>
      <List>
        {list.map((item, index) => {
          return (
            <Box key={index}>
              {item.inbox ? (
                <ListItemGroup params={{ inbox: item, language }}></ListItemGroup>
              ) : (
                <ListItem params={{ inbox: item, language }}></ListItem>
              )}
            </Box>
          )
        })}
      </List>
    </>
  )
}
