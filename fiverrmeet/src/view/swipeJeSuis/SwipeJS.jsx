// import { makeStyles } from "@material-ui/core";
import Card from "../../common/Card";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import "./SwipeJS.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// const useStyles = makeStyles({
//   root: {},
// });

function SwipeJS() {
  // const classes = useStyles();

  const user = [
    {
      image: "./assets/Fiverr_01_Colormatics_Backdrop_00598_ORANGE.jpg",
      name: "",
      description: "",
      icons: "./assets/icons/002-web-programming.png",
      title: "Programming & Tech",
    },
    {
      image: "./assets/Fiverr_04_Trap_Fabrics_Backdrop_00613_PINK.jpg",
      name: "",
      description:
        "",
      icons: "./assets/icons/005-headphones.png",
      title: "Graphic & Design"
    },
    {
      image: "./assets/Fiverr_06_Kevin_Backdrop_02648_YELLOW.jpg",
      name: "",
      description:
        "",
      icons: "./assets/icons/008-hand-shake.png",
      title: "Programming & Tech",
    },
    {
      image: "./assets/.jpg",
      name: "",
      description: "",
      icons: "./assets/icons/",
      title: "Graphic & Design"
    },
    {
      image: "./assets/.jpg",
      name: "",
      description: "",
      icons: "./assets/icons/",
      title: "Data"
    },
    {
      image: "./assets/.jpg",
      name: "",
      description: "",
      icons: "./assets/icons/",
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        className="mySwiper"
      >
        {user.map((users, index) => (
          <SwiperSlide>
            <Card key={index} {...users} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default SwipeJS;
