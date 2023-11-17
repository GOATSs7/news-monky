import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Shrishti Negi",
      title:
        "Nana Patekar BREAKS SILENCE On Slapping A Boy In Viral Video, Says 'I Thought He Was...'  News18",
      description:
        "Actor Nana Patekar has finally addressed a viral video in which he is seen hitting a boy on a film set. Check out his full statement here.",
      url: "https://www.news18.com/movies/nanapatekarbreakssilenceonslappingaboyinviralvideosaysithoughthewas8663910.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2023/11/nanapatekarslapcontroversy20231167534ee8f0248f39922673b92a961d4316x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "20231116T10:15:09Z",
      content:
        "Actor Nana Patekar has finally broken his silence over a viral video of him slapping a boy who tried to take a selfie with him on sets of his film. The video has sparked a major controversy, with net… [+2092 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "The Indian Express",
      title:
        "South Africa vs Australia Live Score, World Cup 2023 SemiFinal: Play to resume at 3:55 PM in Kolkata  The Indian Express",
      description:
        "lorem35  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor neque labore reiciendis ducimus odio qui aperiam natus deleniti eum illum, esse nihil ipsam sequi impedit ratione magni vel incidunt. Delectus cum fugit deserunt dolorem, nisi at nulla dignissimos officiis, laborum ex eius architecto aliquam aliquid nostrum provident aut earum?",
      url: "https://indianexpress.com/article/sports/cricket/southafricavsaustralialivescoreworldcup20232ndsemifinalsavsausscorecardupdatesedengardenskolkata9028629/",
      urlToImage: null,
      publishedAt: "20231116T10:15:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Investing.com",
      },
      author: "IANS",
      title:
        "IIT Guwahati, ISRO study finds Xray polarisation in black hole  Investing.com India",
      description:
        "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
      url: "https://in.investing.com/news/iitguwahatiisrostudyfindsxraypolarisationinblackhole3903438",
      urlToImage:
        "https://iinvdncom.investing.com/news/https://iinvdncom.investing.com/akapiimages/800x450/cb92fdb333133c5a9a9c97aca8ae0004_w_800_h_450.jpg",
      publishedAt: "20231116T09:48:58Z",
      content:
        "Guwahati, Nov 16 (IANS) In a first, researchers from the Indian Institute of Technology Guwahati (IIT Guwahati) and the Indian Space Research Organisation (ISRO) have detected polarised emissions fro… [+2163 chars]",
    },
    {
      source: {
        id: "aljazeeraenglish",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "What has Israel ‘found’ in Gaza’s alShifa Hospital?  Al Jazeera English",
      description:
        "The Israeli military claims it has found rifles, grenades and military vests — but so far, no Hamas command centre.",
      url: "https://www.aljazeera.com/news/2023/11/16/whathasisraelfoundingazasalshifahospital",
      urlToImage:
        "https://www.aljazeera.com/wpcontent/uploads/2023/11/20231115T231830Z_1875568641_RC2ZD4AERC63_RTRMADP_3_ISRAELIPALESTINIANSISRAELIARMYSHIFA1700118976.jpg?resize=1920%2C1440",
      publishedAt: "20231116T09:43:27Z",
      content:
        "Israel on Thursday raided Gazas alShifa hospital for a second day in a row.\r\nOn Wednesday, Israeli troops had raided the coastal enclaves largest medical facility, starting at 2am. Israel has long c… [+3905 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters",
      title:
        "Death toll in China coal firm office rises to 26; at least 38 injured  Reuters",
      description:
        "A fire that erupted in the office of a coal company in northern China has now killed 26 people, state media said on Thursday, raising the death toll from the latest in a series of deadly accidents to befall the coal industry.",
      url: "https://www.reuters.com/world/china/firechinesecoalcompanyofficekills11hurtsleast51statemedia20231116/",
      urlToImage:
        "https://www.reuters.com/pf/resources/images/reuters/reutersdefault.webp?d=163",
      publishedAt: "20231116T09:42:00Z",
      content:
        "BEIJING, Nov 16 (Reuters)  A fire that erupted in the office of a coal company in northern China has now killed 26 people, state media said on Thursday, raising the death toll from the latest in a s… [+1309 chars]",
    },
    {
      source: {
        id: "thetimesofindia",
        name: "The Times of India",
      },
      author: "TOI Sports Desk",
      title:
        "Virat Kohli can match Sachin Tendulkar's record of 100 centuries: Ravi Shastri  IndiaTimes",
      description:
        "Cricket News: Former India head coach Ravi Shastri believes that Virat Kohli is on track to surpass Sachin Tendulkar's record of 100 international hundreds. Kohli c",
      url: "https://timesofindia.indiatimes.com/sports/cricket/iccworldcup/news/viratkohlicanmatchsachintendulkarsrecordof100centuriesravishastri/articleshow/105258782.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid105258707,width1070,height580,imgsize117014,resizemode75,overlaytoi_sw,pt32,y_pad40/photo.jpg",
      publishedAt: "20231116T09:26:00Z",
      content: "Kohli, Shami star as India reach World Cup final",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Tiger 3 Box Office Collection Day 4: Salman Khan\'s Film Takes "Severe Hit" Because Of World Cup SemiFinal  NDTV',
      description:
        "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      url: "https://www.ndtv.com",
      urlToImage: "https://cdn.ndtv.com/common/images/ogndtv.png",
      publishedAt: "20231116T08:38:01Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Entertainment Desk",
      title:
        "David Beckham schmoozes with Karisma, other Bollywood Alisters at Sonam’s bash  Hindustan Times",
      description:
        "Sanjay Kapoor also shared many pictures in which he was seen posing with David Beckham, wife Maheep Kapoor and daughter Shanaya Kapoor. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/karismakapoordavidbeckhamarjunkapoormalaikaarorafarhanakhtarshibanisonamkapoorbash101700118444501.html",
      urlToImage:
        "https://www.hindustantimes.com/htimg/img/2023/11/16/1600x900/sonam_kapoor_party_1700120859319_1700120859480.jpg",
      publishedAt: "20231116T08:13:09Z",
      content:
        "Karisma Kapoor and Sanjay Kapoor were among the guests at Sonam Kapoor and Anand Ahuja's party hosted to welcome David Beckham to India. Post the party, the two actors shared inside pictures from the… [+2099 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Israel Bombs Home Of Hamas' Political Chief Ismail Haniyeh, Shares Video  NDTV",
      description:
        "Israeli troops have struck the house of top Hamas leader Ismail Haniyeh in Gaza. The Israeli Defence Forces shared a video today of fighter jets bombing a house, which they claim is Ismail Haniyeh's.",
      url: "https://www.ndtv.com/worldnews/israelhamaswarhamaschiefhomebombedisraeliairstrikedestroyshomeoftophamasleaderismailhaniyeh4578648",
      urlToImage:
        "https://c.ndtvimg.com/202311/jm1c4ub8_ismailhaniyehhousedestroyed_625x300_16_November_23.jpeg?ver20231016.06",
      publishedAt: "20231116T07:34:30Z",
      content:
        "New Delhi: Israeli troops have struck the house of top Hamas leader Ismail Haniyeh in Gaza. The Israeli Defence Forces shared a video today of fighter jets bombing a house, which they claim is Ismail… [+1423 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        '"One Of The Top Operators": Kane Williamson\'s Heartfelt Praise For Mohammed Shami  NDTV Sports',
      description:
        "Director Comey says the probe into last year's US election would assess if crimes were committed.",
      url: "https://www.bbc.com/news/worlduscanada39324587",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/44EC/production/_95244671_mediaitem95244670.jpg",
      publishedAt: "20231116T07:32:13Z",
      content:
        "Media caption, 'Putin hates Clinton' and other things the FBI learned about Russia\r\nFBI director James Comey has confirmed for the first time that the FBI is investigating alleged Russian interferenc… [+5942 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: "Divyanshi Sharma",
      title:
        "Google users in India will now be able to leave comments on Search results, somewhat like Wikipedia  India Today",
      description:
        "Google just introduced a feature that will let you leave comments on Search results for the world to see. Much like Wikipedia.",
      url: "https://www.indiatoday.in/technology/news/story/googleusersinindiawillnowbeabletoleavecommentsonsearchresultssomewhatlikewikipedia246355620231116",
      urlToImage:
        "https://akmimgain.tosshub.com/indiatoday/images/story/202311/googlenewfeature08530374816x9_3.jpg?VersionId=6Ql36K6dOwH7CCL53mtgXnUg4c0Ifcma",
      publishedAt: "20231116T07:21:02Z",
      content:
        "Google and Wikipedia are among the mostused sources of information used by students and working professionals alike. In the last decade, the term “just Google it” is commonly used by all and there i… [+2562 chars]",
    },
  ];
  constructor() {
    super();
    console.log("This is constructor");
    this.state = {
      article: this.article,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonky - Top Headlines</h2>

        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 30)}
                  description={element.description.slice(0, 45)}
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
