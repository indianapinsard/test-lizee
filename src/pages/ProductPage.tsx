import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Progress } from '../components';
import { ItemBloc } from '../containers';
import { getItem } from '../services/api';

function ProductPage(): JSX.Element {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    name: '',
    description: '',
    images: [],
    variants: {},
  });

  useEffect(() => {
    getItem(productId as string)
      .then((response) => {
        setData(response);
        setLoading(false);
    });
  }, [productId]);

  return (
    <Fragment>
      { loading
        ? <Progress />
        : <ItemBloc data={data} />
      }
    </Fragment>
  );
}

export default ProductPage;
