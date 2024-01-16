// Import Swiper React components
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// ========== import images ==========
// small images
import { smallImages } from "../../assets/data/smallImg";

function LeftBigImage() {

  const [activeImg, setActiveImg] = useState("");

  const handleImageActive = (src) => {
    setActiveImg(src);
  };

  useEffect(() => {
    setActiveImg(smallImages[0].src);
  }, []);
  return (
    <>
      <div className="left">
        <div className="big-image">
          <img src={activeImg} alt="product image" />
        </div>
        <div className="small-image">
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {smallImages.map((item) => (
              <SwiperSlide
                onClick={() => {
                  handleImageActive(item.src);
                }}
                key={item.id}
              >
                <img
                  className={
                    item.src === activeImg ? "small-img active" : "small-img"
                  }
                  src={item.src}
                  alt={item.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default LeftBigImage