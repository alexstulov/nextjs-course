import { useEffect, useState } from 'react';
import { getAllSales } from '../dummy-sales';

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);

  const data = getAllSales();

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map(sale => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const data = getAllSales();
  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume
    });
  }

  return {
    props: {
      sales: transformedSales
    },
    revalidate: 10
  };
}

export default LastSalesPage;
