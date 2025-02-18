import { actionTypes } from "../constants/actionTypes"

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case actionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload,
            }
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}


describe('reducers', () => {
  describe('cart', () => {
    const initialState = {
      addedIds: [],
      quantityById: {}
    }

    it('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('should handle CHECKOUT_REQUEST action', () => {
      expect(cart({}, { type: 'CHECKOUT_REQUEST' })).toEqual(initialState)
    })

    it('should handle CHECKOUT_FAILURE action', () => {
      expect(
        cart({}, { type: 'CHECKOUT_FAILURE', cart: 'cart state' })
      ).toEqual('cart state')
    })

    it('should handle ADD_TO_CART action', () => {
      expect(cart(initialState, { type: 'ADD_TO_CART', productId: 1 })).toEqual(
        {
          addedIds: [1],
          quantityById: { 1: 1 }
        }
      )
    })

    describe('when product is already in cart', () => {
      it('should handle ADD_TO_CART action', () => {
        const state = {
          addedIds: [1, 2],
          quantityById: { 1: 1, 2: 1 }
        }

        expect(cart(state, { type: 'ADD_TO_CART', productId: 2 })).toEqual({
          addedIds: [1, 2],
          quantityById: { 1: 1, 2: 2 }
        })
      })
    })
  })
})
