import { Fragment } from 'react';

import ProductList from '../../components/products/product-list';
import { getAllProducts } from '../../products-list';

function ProductsPage(props) {
  return (
    <Fragment>
      <ProductList items={props.products} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}

export default ProductsPage;
