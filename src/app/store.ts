import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { portfolioReducer } from '../features/portfolio/portfolio-slice'

const rootReducer = combineReducers({
	portfolio: portfolioReducer,
})

export const store = configureStore({
	reducer: rootReducer
})