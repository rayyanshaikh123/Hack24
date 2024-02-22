
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import Spinner from './Spinner';


import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)




        const  updateNews =async()=> {
            props.setProgress(0)
        
              let url = `https://dummyjson.com/products`
              try {
                let data = await fetch(url);
            props.setProgress(40)
            setLoading(true)
                let parsedData = await data.json();
                
                if (parsedData.status === "ok") {
                    setProducts(parsedData.products)
                    setTotalResults(parsedData.totalResults)
                    setLoading(false)
                props.setProgress(80)
            
        
                } else {
                    throw new Error(parsedData.message);
                    
                }
            } catch (error) {
        
              console.log(error.message)
            }
            props.setProgress(100)
          };

 
          useEffect(() => {
        document.title = props.heading;

            updateNews();
            // eslint-disable-next-line
          },[]);



  const fetchMoreData = async () => {
    const url = `https://dummyjson.com/products`
    // setPage(page+1)
    
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      if (parsedData.status === "ok") {
        setProducts(products.concat(parsedData.products))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
  }
  
  };
 
    





    
        return (
          <InfiniteScroll
          dataLength={products.length}
          next={fetchMoreData}
          hasMore={products.length !== totalResults}
          loader={<Spinner/>}
          style={{ overflow: 'visible' }}
      >
            <div className="container" style={{overflow:"none"}}>
                <h1 className="text-center" style={{marginTop: "90px"}}>{props.heading}</h1>
               
                {loading ? (
        <Spinner /> // Display spinner if loading is true
      ) : (
                   
                        <div className="row">
                            {products.map((element) => (
                                <div className="col-md-4" key={element.url}>
                                    <ProductItem
                                        image={element.images}
                                        title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.description.slice(0, 88) : ""}
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
       
    
}
// News.defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//     heading: "General"
// }

//  News.propTypes ={
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//     heading: PropTypes.string,
// }
export default News;