import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import images from '../../constants/images'
import './SpecialMenu.css';
import img1 from '../../assets/gallery01.png'
import img2 from '../../assets/gallery02.png'
import img3 from '../../assets/gallery03.png'

const SpecialMenu = () => {
  const [index, setIndex] = useState(0);
  const imgs = [
    {name: 'image 1', src: img1},
    {name: 'image 2', src: img2},
    {name: 'image 3', src: img3}
  ];
  const renderMenu = () => {
    console.log(imgs[index].name, imgs[index].src);
    return (
      <div className='app__header-img'>
        <img src={imgs[index].src} alt={imgs[index].name}/>
      </div>
    );
  };

  const checkIdxImg = (index) => {
    if(index < 0){
      return 2;
    }
    if(index > 2){
      return 0;
    }
    return index;
  }

  return (
    <div className='app__specialMenu app__wrapper_specialMenu section__padding'>
      <FaArrowLeft  color="#fff" fontSize={27} onClick={() => setIndex(checkIdxImg(index - 1))}/>
      {renderMenu(index)}
      <FaArrowRight  color="#fff" fontSize={27} onClick={() => setIndex(checkIdxImg(index + 1))}/>
    </div>
  );
};
  
export default SpecialMenu;
