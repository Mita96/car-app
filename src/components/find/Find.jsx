import React from "react";
import style from "./Find.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";


function Find() {
  return (
  <div className={style.find}> 
        <div className={style.heading}>
            <h1>Pick your vehicle</h1>
            <div className={style.text}>
                <p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis.</span>
                </p>
            </div>
        </div>
        <div className={style.slider_container}>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                 spaceBetween={5}
                 slidesPerView={3}
                 navigation
                 breakpoints={{
                    340:{
                        width:200,
                        slidesPerView:1,
                    },
                    768:{
                        width:768,
                        slidesPerView:4,
                    },
                    1040:{
                        width:1040,
                        slidesPerView:5,
                    },
                 }}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Card image="https://images.unsplash.com/photo-1503507420689-7b961cc77da5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaXxlbnwwfHwwfHx8MA%3D%3D" make="Audi"></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://images.unsplash.com/photo-1622551997608-400d763b0f64?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lcmNlZGVzJTIwYmVuenxlbnwwfHwwfHx8MA%3D%3D" make="Mercedes Benz"></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://images.unsplash.com/photo-1606427016531-19f13bd6b761?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV1Z2VvdHxlbnwwfHwwfHx8MA%3D%3D" make="Peugeot"></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://images.unsplash.com/photo-1605007728419-d4203400355d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENpdHJvJUMzJUFCbnxlbnwwfHwwfHx8MA%3D%3D" make="Citroën"></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://images.unsplash.com/photo-1624804269473-828dcc30a210?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9sbHMlMjByb3ljZXxlbnwwfHwwfHx8MA%3D%3D" make="Rolls Royce"></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image="https://images.unsplash.com/photo-1610908374865-dae3c6392a2f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVudGxleXxlbnwwfHwwfHx8MA%3D%3D" make="Bentley"></Card>
                    </SwiperSlide>
                </Swiper>

        </div>
   </div>

  )
}

export default Find;
