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
      src: 'https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg',
      altText: 'Slide 3',
      caption: 'SPORTIFY'
    },
    {
        src: 'https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg',
        altText: 'Slide 4',
        caption: 'DISNEY+'
      },
      {
        src: 'https://www.logo.wine/a/logo/Google_Stadia/Google_Stadia-Logo.wine.svg',
        altText: 'Slide 4',
        caption: 'STADIA'
      },
      {
        src: 'https://www.logo.wine/a/logo/Viu_(streaming_media)/Viu_(streaming_media)-Logo.wine.svg',
        altText: 'Slide 4',
        caption: 'VIU'
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
            max-width: 100%;
            background: black;
        
            }
            img{
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 30%;
            }
            `
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