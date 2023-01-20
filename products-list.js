const data = {
  products: [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' }
  ]
};
const getAllProducts = () => data.products;

const getProductById = id => data.products.find(prod => prod.id === id);

export { getAllProducts, getProductById };
