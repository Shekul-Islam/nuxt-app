export const useProductStore = defineStore('product', {
    state: () => ({
      products: []
    }),
    actions: {
      fetchProducts() {
        this.products = [
          { id: 1, name: 'Laptop', price: 1000 },
          { id: 2, name: 'Tablet', price: 600 }
        ]
      }
    }
  })
  