import Card from "../../common/Card";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

function SwipeJC() {
  const user = [
    {
      image: "./assets/Fiverr_06_Kevin_Backdrop_02648.jpg",
      name: "Julien Mari",
      description:
        "Je peux vous aider à créer des slides de présentations avec differents templates.",
      icons: "./assets/icons/006-social-media.png",
      title: "Digital Marketing",
    },
    {
      image: "./assets/Fiverr_09_April_Backdrop_01646_MEDIUM_GREEN.jpg",
      name: "Lauryn Hill",
      description:
        "Beaucoup d'expériences en montage de vlog pour des Youtubeurs je suis en mesure de vous aider.",
      icons: "./assets/icons/001-lifestyle.png",
      title: "Lifestyle",
    },
    {
      image: "./assets/Fiverr_13_Ritika_Background_00682_GREEN.jpg",
      name: "Billie Eilish",
      description: "Je peux vous montrer comment monter un studio audio.",
      icons: "./assets/icons/007-online-video.png",
      title: "Music & Audio",
    },
    {
      image: "./assets/Fiverr_14_Gabrielle_Background_01097_YELLOW.jpg",
      name: "Coline",
      description:
        "Blogueuse engagé dans les droits des animaux et de l'écologie.",
      icons: "./assets/icons/001-lifestyle.png",
      title: "Lifestyle",
    },
    {
      image: "./assets/Fiverr_12_Romana_Backdrop_02486_DARK_PURPLE.jpg",
      name: "Enjoy Phoenix",
      description:
        "Vous cherchez à faire un montage vidéo pour quoi que ce soit? Je peux vous aider.",
      icons: "./assets/icons/007-online-video.png",
      title: "Music & Audio",
    },
    {
      image: "./assets/Fiverr_15_David_Background_02846_PINK.jpg",
      name: "Arniaud Maurice",
      description:
        "Vous cherchez à accelérer votre start-up grâce à Instagram?",
      icons: "./assets/icons/006-social-media.png",
      title: "Digital Marketing",
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
