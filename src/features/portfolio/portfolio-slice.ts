import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	count: 0,
}

const portfolioSlice = createSlice({
	name: 'portfolio',
	initialState,
	reducers: {
		incrementCount: (currentState) => ({
			...currentState,
			count: currentState.count + 1
		})
	}
})

export const { reducer: portfolioReducer } = portfolioSlice
export const { incrementCount } = portfolioSlice.actions
export const selectCount = rootState => rootState.portfolio.count