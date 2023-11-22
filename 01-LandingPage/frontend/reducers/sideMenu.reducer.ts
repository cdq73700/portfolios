import { createSlice } from '@reduxjs/toolkit'
import { SideMenuInitial } from '@/types/sideMenu.type'

const initialState: SideMenuInitial = {
  anchor: 'left',
  isOpen: false,
}

const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    toggleMenu(state, action) {
      state.anchor = action.payload
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleMenu } = sideMenuSlice.actions
export default sideMenuSlice.reducer
