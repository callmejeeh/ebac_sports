import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritoState = {
  itensfav: Produto[]
}

const initialState: favoritoState = {
  itensfav: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    addfav: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itensfav.find((f) => f.id === favoritos.id)) {
        alert('Item já favoritado')
      } else {
        state.itensfav.push(favoritos)
      }
    }
  }
})

// const produtoEstaNosFavoritos = (produto: ProdutoType) => {
//   const produtoId = produto.id
//   const IdsDosFavoritos = favoritos.map((f) => f.id)

//   return IdsDosFavoritos.includes(produtoId)
// }

// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }

// {estaNosFavoritos
//   ? '- Remover dos favoritos'
//   : '+ Adicionar aos favoritos'}

export const { addfav } = favoritoSlice.actions
export default favoritoSlice.reducer
