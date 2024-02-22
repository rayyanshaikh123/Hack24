
import React, { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import Spinner from './Spinner';


import InfiniteScroll from 'react-infinite-scroll-component';

// 




const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // Set to false initially
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
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://dummyjson.com/products`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setProducts((prevProducts) => [...prevProducts, ...parsedData.products]); // Update state correctly
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMoreData}
      hasMore={products.length !== totalResults}
      loader={<Spinner />}
      style={{ overflow: "visible" }}
    >
      <div className="container" style={{ overflow: "none" }}>
        <h1 className="text-center" style={{ marginTop: "90px" }}>
          {props.heading}
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row flex-wrap">
            {products.map((element, index) => (
              <div className="col-md-4" key={index}>
                <ProductItem
                  image={element.images}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  price={element.price}
                  brand={element.brand}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default Product;
