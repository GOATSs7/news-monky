import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=1&pageSize=${this.props.pageSize}`;
      // this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      // Ensure parsedData.articles is defined before updating state
      if (parsedData.articles) {
        this.setState({
          article: parsedData.articles,
          totalResults: parsedData.totalResults,
        });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  //pre btn
  handelprevBtn = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });

      let data = await fetch(url);
      let parsedData = await data.json();

      // Ensure parsedData.articles is defined before updating state
      if (parsedData.articles) {
        this.setState({
          article: parsedData.articles,
          page: this.state.page - 1,
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  //next btn
  handelNextBtn = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=${
          this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        let parsedData = await data.json();

        // Ensure parsedData.articles is defined before updating state
        if (parsedData.articles) {
          this.setState({
            article: parsedData.articles,
            page: this.state.page + 1,
            loading: false,
          });
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonky - Top Headlines</h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 60)
                        : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handelprevBtn}
          >
            &larr; previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handelNextBtn}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
