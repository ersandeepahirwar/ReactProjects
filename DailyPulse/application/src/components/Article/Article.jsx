import { Button, Card } from "react-bootstrap";

import "./Article.css";

export default function Article({
  source,
  title,
  description,
  urlToImage,
  url,
  publishedAt,
}) {
  return (
    <Card className="article-card h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={urlToImage || "https://placehold.co/600x350?text=No+Image"}
        loading="lazy"
        alt={title || "News Article"}
        onError={(e) => {
          e.target.src = "https://placehold.co/600x350?text=No+Image";
        }}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <span
          className="badge bg-primary mb-2 align-self-start fw-medium"
          style={{ letterSpacing: "0.05em" }}
        >
          {source?.name}
        </span>
        <Card.Title
          className="fw-semibold my-1"
          style={{ minHeight: "50px", fontSize: "16px", lineHeight: "24px" }}
        >
          {title?.length > 70 ? title.slice(0, 70) + "..." : title}
        </Card.Title>

        <Card.Text
          className="text-muted flex-grow-1"
          style={{ maxHeight: "65px", fontSize: "14px" }}
        >
          {description
            ? description.length > 120
              ? description.slice(0, 120) + "..."
              : description
            : "No description available."}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center mt-1">
          <span className="text-secondary" style={{ fontSize: "13px" }}>
            {new Date(publishedAt).toLocaleDateString()}
          </span>

          <Button
            variant="dark"
            size="sm"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "12px", letterSpacing: "0.05em" }}
          >
            Read More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
