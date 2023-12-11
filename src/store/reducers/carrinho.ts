import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[]
}

const initialState: carrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

// function adicionarAoCarrinho(produto: Produto) {
//   if (carrinho.find((p) => p.id === produto.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, produto])
//   }
// }

export const { adicionarCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
