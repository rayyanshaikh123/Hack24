import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from './Navbar';
import Footer from './Footer';

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://dummyjson.com/products`;
    try {
      let data = await fetch(url);
      props.setProgress(40);
      setLoading(true);
      let parsedData = await data.json();

      setProducts(parsedData.products);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    document.title = props.heading;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://dummyjson.com/products`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setProducts((prevProducts) => [...prevProducts, ...parsedData.products]);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={products.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: 'visible' }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p className="text-4xl px-5 font-semibold" style={{ marginTop: '40px' }}>
            {props.heading}
          </p>
          {loading ? (
            <Spinner />
          ) : (
            <div className="row" style={{ marginRight: '-15px', marginLeft: '-15px' }}>
              {products.map((element, index) => (
                <div className="col-md-4" key={index} style={{ paddingRight: '15px', paddingLeft: '15px' }}>
                  <ProductItem
                    image={element.images}
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    price={element.price}
                    brand={element.brand}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </InfiniteScroll>
      <Footer/>
    </>
  );
};

export default Product;
