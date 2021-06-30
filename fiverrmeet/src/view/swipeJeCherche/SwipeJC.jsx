// import { makeStyles } from "@material-ui/core";
import Card from "../../common/Card";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import "./SwipeJC.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// const useStyles = makeStyles({
//   root: {},
// });

function SwipeJC() {
  // const classes = useStyles();

  const user = [
    {
      image: "./assets/Fiverr_01_Colormatics_Backdrop_00598_ORANGE.jpg",
      name: "Marc Orel",
      description: "Je cherche de l'aide afin de créer un caroussel en Windev.",
      icons: "./assets/icons/002-web-programming.png",
    },
    {
      image: "./assets/Fiverr_04_Trap_Fabrics_Backdrop_00613_PINK.jpg",
      name: "Jeanne Treton",
      description:
        "Bonjour, j'ai besoin de réaliser une bande son pour un projet client, et j'ai un problème technique.",
      icons: "./assets/icons/005-headphones.png",
    },
    {
      image: "./assets/Fiverr_06_Kevin_Backdrop_02648_YELLOW.jpg",
      name: "Yann Berg",
      description:
        "Je démarre mon activitée de freelance et j'ai besoin d'aide concernant les prix à appliquer pour commencer.",
      icons: "./assets/icons/008-hand-shake.png",
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
export default SwipeJC;
