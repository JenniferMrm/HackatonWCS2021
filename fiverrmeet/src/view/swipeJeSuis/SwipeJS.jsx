import Card from "../../common/Card";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);


function SwipeJS() {
  const user = [
    {
      image: "./assets/Fiverr_01_Colormatics_Backdrop_00598_ORANGE.jpg",
      name: "Marc Orel",
      description: "Je cherche de l'aide afin de créer un caroussel en Windev.",
      icons: "./assets/icons/002-web-programming.png",
      title: "Programming & Tech",
    },
    {
      image: "./assets/Fiverr_04_Trap_Fabrics_Backdrop_00613_PINK.jpg",
      name: "Rocky Balboa",
      description:
        "Bonjour, j'ai besoin de réaliser une charte graphique pour un projet client, et j'ai un problème technique.",
      icons: "./assets/icons/004-computer.png",
      title: "Graphic & Design",
    },
    {
      image: "./assets/Fiverr_06_Kevin_Backdrop_02648_YELLOW.jpg",
      name: "John Coffey",
      description:
        "Je démarre mon activitée de freelance et j'ai besoin d'aide concernant les prix à appliquer pour commencer sur du Back-End.",
      icons: "./assets/icons/002-web-programming.png",
      title: "Programming & Tech",
    },
    {
      image: "./assets/Fiverr_05_Kurt_Backdrop_01752_GREEN.jpg",
      name: "Keyser Soze",
      description:
        "J'ai besoin de réaliser un logo très spécifique avec illustrator, du jamais vue.",
      icons: "./assets/icons/004-computer.png",
      title: "Graphic & Design",
    },
    {
      image: "./assets/Fiverr_07_Jimmy_Backdrop_00671_PINK.jpg",
      name: "Han Solo",
      description:
        "J'ai besoin d'accéder aux données satellites du Millénium, avant sa création.",
      icons: "./assets/icons/009-data.png",
      title: "Data",
    },
    {
      image: "./assets/Fiverr_08_James_Backdop_01402_ORANGE.jpg",
      name: "Hannibal Lecteur",
      description:
        "Je souhaiterais obtenir les datas des hommes finissant leurs vie en prison.",
      icons: "./assets/icons/009-data.png",
      title: "Data",
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
