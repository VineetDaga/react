import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News= (props)=>{
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalresult, setTotalresult] = useState([]);
  document.title = `${capitalize(props.category)} - NewsMonkey`;

  const update = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(35);
    const data = await fetch(url);
    const temp = await data.json();
    props.setProgress(70);
    setLoading(false)
    setArticle(temp.articles)
    setTotalresult(temp.totalResults)
    props.setProgress(100);
  };

  useEffect(()=>{
    update();
  },[])

  const fetchMoreData = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    setLoading(true);
    props.setProgress(30);
    const data = await fetch(url);
    const temp = await data.json();
    props.setProgress(70);
    setLoading(false);
    setArticle(article.concat(temp.articles));
    setTotalresult(temp.totalResults)
    props.setProgress(100);
  };
    return (
      <div className="w-4/5 mx-auto pt-20">
        <h1 className="text-center text-3xl m-3 ">
          <strong>
            NewsMonkey - Top {capitalize(props.category)} Headlines
          </strong>{" "}
        </h1>
        {loading && <Spin></Spin>}

        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData} //To put endMessage and loader to the top.
          hasMore={article.length < totalresult}
          loader={<Spin />}
        >
          <div className="flex flex-wrap justify-center">
            {article.map((e) => {
              return (
                <div
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
                  key={e.title}
                >
                  <NewsItem
                    title={e.title ? e.title : ""}
                    description={e.description ? e.description : ""}
                    imgurl={e.urlToImage}
                    newsUrl={e.url}
                    date={e.publishedAt}
                    author={e.author}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

