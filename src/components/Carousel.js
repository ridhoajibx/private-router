import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    {
      src: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
      altText: 'Slide 1',
      caption: 'NETFLIX'
    },
    {
      src: 'https://www.logo.wine/a/logo/BT_Sport/BT_Sport-Logo.wine.svg',
      altText: 'Slide 2',
      caption: 'BT SPORT'
    },
    {
      src: 'https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg',
      altText: 'Slide 3',
      caption: 'YOUTUBE'
    },
    {
        src: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-White-Dark-Background-Logo.wine.svg',
        altText: 'Slide 4',
        caption: 'DISNEY+'
      }
  ];

const Slide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption className="text-muted"  captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
            background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next"  directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Slide;