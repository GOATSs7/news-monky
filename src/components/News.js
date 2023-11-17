import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      article: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5a001a24bf9745ec89c6ed6fc9dfcfdf";

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
      </div>
    );
  }
}

export default News;
