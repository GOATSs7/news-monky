import React, { Component } from "react";
import NewsItem from "./NewsItem";

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
      let url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=1";

      let data = await fetch(url);
      let parsedData = await data.json();

      // Ensure parsedData.articles is defined before updating state
      if (parsedData.articles) {
        this.setState({ article: parsedData.articles });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }
  //pre btn
  handelprevBtn = async () => {
    console.log("Previous");

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=${
        this.state.page - 1
      }`;

      let data = await fetch(url);
      let parsedData = await data.json();

      // Ensure parsedData.articles is defined before updating state
      if (parsedData.articles) {
        this.setState({
          article: parsedData.articles,
          page: this.state.page - 1,
        });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  //next btn
  handelNextBtn = async () => {
    console.log("Next");

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf&page=${
      this.state.page + 1
    }`;

    let data = await fetch(url);
    let parsedData = await data.json();

    // Ensure parsedData.articles is defined before updating state
    if (parsedData.articles) {
      this.setState({
        article: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonky - Top Headlines</h1>

        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 30) : " "}
                  description={
                    element.description ? element.description.slice(0, 60) : " "
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
