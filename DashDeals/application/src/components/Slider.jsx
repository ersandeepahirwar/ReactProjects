import Carousel from "react-bootstrap/Carousel";

const images = [
  "https://i.ibb.co/spnsFKqt/Fashion-Store-Image-1.jpg",
  "https://i.ibb.co/wHnsMKw/Fashion-Store-Image-2.jpg",
  "https://i.ibb.co/svWSKnHh/Fashion-Store-Image-3.jpg",
  "https://i.ibb.co/5hTtXb8G/Fashion-Store-Image-4.jpg",
  "https://i.ibb.co/XfFv3fJW/Fashion-Store-Image-5.jpg",
  "https://i.ibb.co/C3Jb2Tzn/Fashion-Store-Image-6.jpg",
  "https://i.ibb.co/LBnhP7x/Fashion-Store-Image-7.jpg",
  "https://i.ibb.co/Xrsw0PpK/Fashion-Store-Image-8.jpg",
  "https://i.ibb.co/nspg0XV3/Fashion-Store-Image-9.jpg",
  "https://i.ibb.co/fYMV3MZv/Fashion-Store-Image-10.jpg",
];

export default function Slider() {
  return (
    <Carousel fade interval={3000}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              height: "600px",
              objectFit: "cover",
            }}
          />

          <Carousel.Caption>
            <h3>Everything You Need, All in One Place</h3>
            <p>
              Shop top brands, exclusive deals, and trending products with
              amazing discounts.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
