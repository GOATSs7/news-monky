import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);

    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-NewsMonkey`;
  }

  async updateNews() {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      // Ensure parsedData.articles is defined before updating state
      if (parsedData.articles) {
        this.setState({
          article: parsedData.articles,
          totalResults: parsedData.totalResults,
          // loading: false,
        });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  async componentDidMount() {
    this.updateNews();
    // try {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=1&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   // Ensure parsedData.articles is defined before updating state
    //   if (parsedData.articles) {
    //     this.setState({
    //       article: parsedData.articles,
    //       totalResults: parsedData.totalResults,
    //       loading: false,
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error fetching news:", error);
    // }
  }

  //pre btn
  // handelprevBtn = async () => {
  //   // try {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //     this.props.country
  //   //   }&category=${
  //   //     this.props.category
  //   //   }&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=${
  //   //     this.state.page - 1
  //   //   }&pageSize=${this.props.pageSize}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   // Ensure parsedData.articles is defined before updating state
  //   //   if (parsedData.articles) {
  //   //     this.setState({
  //   //       article: parsedData.articles,
  //   //       page: this.state.page - 1,
  //   //       loading: false,
  //   //     });
  //   //   }
  //   // } catch (error) {
  //   //   console.error("Error fetching news:", error);
  //   // }
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  //next btn
  // handelNextBtn = async () => {
  //   // if (
  //   //   !(
  //   //     this.state.page + 1 >
  //   //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   //   )
  //   // ) {
  //   //   try {
  //   //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //       this.props.country
  //   //     }&category=${
  //   //       this.props.category
  //   //     }&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=${
  //   //       this.state.page + 1
  //   //     }&pageSize=${this.props.pageSize}`;
  //   //     this.setState({ loading: true });

  //   //     let data = await fetch(url);
  //   //     let parsedData = await data.json();

  //   //     // Ensure parsedData.articles is defined before updating state
  //   //     if (parsedData.articles) {
  //   //       this.setState({
  //   //         article: parsedData.articles,
  //   //         page: this.state.page + 1,
  //   //         loading: false,
  //   //       });
  //   //     }
  //   //   } catch (error) {
  //   //     console.error("Error fetching news:", error);
  //   //   }
  //   // }

  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      // this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      // Ensure parsedData.articles is defined before updating state
      if (parsedData.articles) {
        this.setState({
          article: this.state.article.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
          // loading: false,
        });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonky - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.article.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={
                        element.description
                          ? element.description.slice(0, 60)
                          : " "
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
