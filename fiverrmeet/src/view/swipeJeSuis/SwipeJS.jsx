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
      description: "I'm looking for help to build a carousel in WinDev",
      icons: "./assets/icons/002-web-programming.png",
      title: "Programming & Tech",
    },
    {
      image: "./assets/Fiverr_04_Trap_Fabrics_Backdrop_00613_PINK.jpg",
      name: "Rocky Balboa",
      description:
        "Hi, I need to realise a graphic charts for a customer and I have a technical issue",
      icons: "./assets/icons/004-computer.png",
      title: "Graphic & Design",
    },
    {
      image: "./assets/Fiverr_06_Kevin_Backdrop_02648_YELLOW.jpg",
      name: "John Coffey",
      description:
        "I'm starting my professionnal activity in freelancing and I need advices for the prices to apply with my customers",
      icons: "./assets/icons/002-web-programming.png",
      title: "Programming & Tech",
    },
    {
      image: "./assets/Fiverr_05_Kurt_Backdrop_01752_GREEN.jpg",
      name: "Keyser Soze",
      description:
        "I need to do a really specific logo on Illustrator, something never seen before.",
      icons: "./assets/icons/004-computer.png",
      title: "Graphic & Design",
    },
    {
      image: "./assets/Fiverr_07_Jimmy_Backdrop_00671_PINK.jpg",
      name: "Han Solo",
      description:
        "I need to access the data of the Falcon Millenium, before it's creation.",
      icons: "./assets/icons/009-data.png",
      title: "Data",
    },
    {
      image: "./assets/Fiverr_08_James_Backdop_01402_ORANGE.jpg",
      name: "Hannibal Lecteur",
      description:
        "I would like to get the datas of all men which ended up their lifes in prison",
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
