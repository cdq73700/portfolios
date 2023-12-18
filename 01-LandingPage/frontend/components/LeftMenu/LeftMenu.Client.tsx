'use client'

import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useCallback, useContext, useState } from 'react'
import HeaderContext from '../Header/Header.Context'
import { LeftMenuClientProps, ListItemGroupProps, ListItemProps } from '@/types/components/LeftMenu.Type'

function ListItem({ params }: ListItemProps) {
  const { inbox, listItemButtonProps } = params
  const { href, icon, value } = inbox
  return (
    <ListItemButton data-testid={value} href={href ?? ''} {...listItemButtonProps}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={value}></ListItemText>
    </ListItemButton>
  )
}

function ListItemGroup({ params }: ListItemGroupProps) {
  const { inbox: paramInbox } = params
  const { icon, value, inbox } = paramInbox
  const [open, setOpen] = useState(false)
  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <>
      <ListItemButton onClick={handleClick} data-testid={value}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={value}></ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {inbox &&
            inbox.map(({ href, icon, value }, index) => {
              const params = { inbox: { href, icon, value }, listItemButtonProps: { style: { paddingLeft: '2.5rem' } } }
              return <ListItem key={index} params={params}></ListItem>
            })}
        </List>
      </Collapse>
    </>
  )
}

export default function LeftMenuClient({ params }: LeftMenuClientProps) {
  const { list } = params
  const { anchor } = useContext(HeaderContext)

  if (anchor !== 'left') return <></>
  return (
    <>
      <List>
        {list.map((item, index) => {
          return (
            <Box key={index}>
              {item.inbox ? (
                <ListItemGroup params={{ inbox: item }}></ListItemGroup>
              ) : (
                <ListItem params={{ inbox: item, listItemButtonProps: {} }}></ListItem>
              )}
            </Box>
          )
        })}
      </List>
    </>
  )
}
