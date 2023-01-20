import React from 'react';
import path from 'path';
import fs from 'fs/promises';

function ProductDetailPage({ product }) {
  if (!product) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map(product => ({ params: { pid: product.id } }));
  return {
    paths: ids,
    fallback: false
  };
}
async function getData() {
  const filePath = path.join(process.cwd(), 'products-details.json');
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();

  const product = data.products.find(product => product.id === productId);

  if (!product) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      product
    }
  };
}

export default ProductDetailPage;
