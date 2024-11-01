import Carousel from 'react-bootstrap/Carousel';

 export function Carus() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://www.blacksides.ru/upload/resize_cache/iblock/e6b/900_1200_1/r67kmm0dionlfu9ql1k24r7zhmlse7rh.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p> толстовка №1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://kkaravaev.com/wa-data/public/shop/products/70/34/13470/images/22677/22677.970.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p> толстовка №2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://files.gifts.ru/reviewer/tb/72/7611.30_12_500.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p> толстовка №3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
