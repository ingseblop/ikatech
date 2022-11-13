import { createSlice } from "@reduxjs/toolkit";
import shoesService from '../services/shoesServices'

const shoeSlice = createSlice({
    name: 'shoes',
    initialState:[],
    reducers: {
        setShoes(state, action) {
            return action.payload
          },
    },
  })

  export const { setShoes } = shoeSlice.actions

  export const initializeShoes = () => {
    return async dispatch => {
      const shoes = await shoesService.getAll()
      dispatch(setShoes(shoes))
    }
  }

  export default shoeSlice.reducer