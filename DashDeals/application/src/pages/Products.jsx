import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    image: "https://i.ibb.co/0pFNZt55/Product-Image-1.jpg",
    price: 1499,
    discountPrice: 999,
  },
  {
    id: 2,
    name: "Slim Fit Casual Shirt",
    image: "https://i.ibb.co/0jWP1dgP/Product-Image-2.jpg",
    price: 1999,
    discountPrice: 1499,
  },
  {
    id: 3,
    name: "Regular Fit Denim Jeans",
    image: "https://i.ibb.co/W48Hrh2D/Product-Image-3.jpg",
    price: 2499,
    discountPrice: 1799,
  },
  {
    id: 4,
    name: "Oversized Hoodie",
    image: "https://i.ibb.co/Dg61r3ms/Product-Image-4.jpg",
    price: 2999,
    discountPrice: 2299,
  },
  {
    id: 5,
    name: "Premium Sweatshirt",
    image: "https://i.ibb.co/tMvz4pyk/Product-Image-5.jpg",
    price: 2799,
    discountPrice: 1999,
  },
  {
    id: 6,
    name: "Casual Polo T-Shirt",
    image: "https://i.ibb.co/0y9HpNh0/Product-Image-6.jpg",
    price: 1699,
    discountPrice: 1199,
  },
  {
    id: 7,
    name: "Denim Jacket",
    image: "https://i.ibb.co/wZ8YLp6M/Product-Image-7.jpg",
    price: 3499,
    discountPrice: 2799,
  },
  {
    id: 8,
    name: "Winter Bomber Jacket",
    image: "https://i.ibb.co/gZdcD2r5/Product-Image-8.jpg",
    price: 3999,
    discountPrice: 3199,
  },
  {
    id: 9,
    name: "Checked Casual Shirt",
    image: "https://i.ibb.co/NdYCKZ5Z/Product-Image-9.jpg",
    price: 1899,
    discountPrice: 1399,
  },
  {
    id: 10,
    name: "Printed Graphic T-Shirt",
    image: "https://i.ibb.co/MDv2QRcH/Product-Image-10.jpg",
    price: 1599,
    discountPrice: 1099,
  },
  {
    id: 11,
    name: "Comfort Fit Joggers",
    image: "https://i.ibb.co/VG12kKF/Product-Image-11.jpg",
    price: 2299,
    discountPrice: 1699,
  },
  {
    id: 12,
    name: "Cargo Pants",
    image: "https://i.ibb.co/LKGKx1d/Product-Image-12.jpg",
    price: 2599,
    discountPrice: 1899,
  },
  {
    id: 13,
    name: "Athletic Track Pants",
    image: "https://i.ibb.co/TqwT6Bx9/Product-Image-13.jpg",
    price: 2199,
    discountPrice: 1599,
  },
  {
    id: 14,
    name: "Cotton Shorts",
    image: "https://i.ibb.co/d4RfpnLz/Product-Image-14.jpg",
    price: 1399,
    discountPrice: 999,
  },
  {
    id: 15,
    name: "Casual Summer Wear",
    image: "https://i.ibb.co/kskCcsHV/Product-Image-15.jpg",
    price: 1799,
    discountPrice: 1299,
  },
  {
    id: 16,
    name: "Classic Fashion Outfit",
    image: "https://i.ibb.co/JwfjnzKK/Product-Image-16.jpg",
    price: 2499,
    discountPrice: 1899,
  },
  {
    id: 17,
    name: "Premium Streetwear",
    image: "https://i.ibb.co/20HPMg8P/Product-Image-17.jpg",
    price: 2699,
    discountPrice: 1999,
  },
  {
    id: 18,
    name: "Modern Casual Wear",
    image: "https://i.ibb.co/S40xHbSw/Product-Image-18.jpg",
    price: 2199,
    discountPrice: 1599,
  },
  {
    id: 19,
    name: "Designer Fashion Wear",
    image: "https://i.ibb.co/gbPzqdTD/Product-Image-19.jpg",
    price: 3299,
    discountPrice: 2499,
  },
  {
    id: 20,
    name: "Premium Everyday Outfit",
    image: "https://i.ibb.co/QvN1PQMk/Product-Image-20.jpg",
    price: 2899,
    discountPrice: 2199,
  },
];

export default function Products() {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">Featured Products</h2>

      <Row className="g-4">
        {products.map((product) => {
          const discount = Math.round(
            ((product.price - product.discountPrice) / product.price) * 100,
          );

          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card className="h-100 shadow-sm border-0">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <Badge
                    bg="danger"
                    className="position-absolute top-0 end-0 m-2"
                  >
                    {discount}% OFF
                  </Badge>
                </div>

                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    className="fs-6 fw-bold"
                    style={{ minHeight: "48px" }}
                  >
                    {product.name}
                  </Card.Title>

                  <div className="mb-3">
                    <span className="text-danger fw-bold fs-5">
                      ₹{product.discountPrice}
                    </span>

                    <span className="text-muted text-decoration-line-through ms-2">
                      ₹{product.price}
                    </span>
                  </div>

                  <Button variant="dark" className="mt-auto w-100">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
