import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import api from '../services/api'
import favoritosReducer from './reducers/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getdDefaultMiddleware) =>
    getdDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
