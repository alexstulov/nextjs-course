import Link from 'next/link';
import classes from './product-list.module.css';

function ProductList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map(product => (
        <li key={product.id}>
          <div>
            <div>
              <h2>
                <Link href={`/products/${product.id}`}>{product.title}</Link>
              </h2>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
