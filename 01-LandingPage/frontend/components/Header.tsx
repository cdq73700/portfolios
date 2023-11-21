'use client'
import { Menu, Search, Settings } from '@mui/icons-material'
import SideMenu from './SideMenu'
import LeftMenu from './LeftMenu'
import { useState } from 'react'
import RightMenu from './RightMenu'

const Header = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false)
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false)

  return (
    <>
      <header>
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsLeftMenuOpen(!isLeftMenuOpen)}>
            <Menu className="m-1"></Menu>
          </button>
          <div>HEADER</div>
          <div className="flex-grow"></div>
          <button>
            <Search className="m-1"></Search>
          </button>
          <button onClick={() => setIsRightMenuOpen(!isRightMenuOpen)}>
            <Settings className="m-1"></Settings>
          </button>
        </div>
      </header>

      <div hidden={!isLeftMenuOpen}>
        <SideMenu position="left-0" setIsOpen={setIsLeftMenuOpen}>
          <LeftMenu></LeftMenu>
        </SideMenu>
      </div>
      <div hidden={!isRightMenuOpen}>
        <SideMenu position="right-0" setIsOpen={setIsRightMenuOpen}>
          <RightMenu></RightMenu>
        </SideMenu>
      </div>
    </>
  )
}

export default Header
