import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div style={{ marginBottom: "50px" }}>
        <div
          className="card"
          style={{
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            src={
              !imageUrl
                ? "https://cdn.vox-cdn.com/thumbor/M7D3u7rsKddbeYZPptgkRwWw6UY=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951393/STK088_VRG_Illo_N_Barclay_2_spotify.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{ height: "10rem", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
              style={{ textDecoration: "none", color: "white" }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
