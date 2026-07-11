import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

import { Row, Col, Container, Spinner } from "react-bootstrap";

import InfiniteScroll from "react-infinite-scroll-component";

import Article from "../components/Article/Article";
import Loader from "../components/Loader";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const [q, setQ] = useState("all");
  const [language, setLanguage] = useState("hi");

  const [searchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  async function getDataFromAPI(q, language) {
    setLoading(true);

    try {
      const url = `https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=12&page=1&sortBy=publishedAt&apiKey=${API_KEY}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }

      const data = await response.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchMore() {
    const url = `https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=12&page=${page + 1}&sortBy=publishedAt&apiKey=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const data = await response.json();
    setArticles((previous) => [...previous, ...data.articles]);

    setPage((previous) => previous + 1);
  }

  useEffect(() => {
    let q = searchParams.get("q") ?? "all";
    let language = searchParams.get("language") ?? "hi";
    setQ(q);
    setLanguage(language);
    setPage(1);
    getDataFromAPI(q, language);
  }, [searchParams]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container className="my-4">
      <InfiniteScroll
        className="overflow-hidden"
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length < totalResults}
        loader={<Loader height="80px" />}
      >
        <Row className="g-4">
          {articles.map((article, index) => (
            <Col key={index} xs={12} sm={6} lg={4} xl={3}>
              <Article
                source={article.source}
                title={article.title}
                description={article.description}
                urlToImage={article.urlToImage}
                url={article.url}
                publishedAt={article.publishedAt}
              />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}
