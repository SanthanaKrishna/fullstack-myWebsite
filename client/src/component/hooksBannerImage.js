import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import '../container/homePage/homeSlider.scss';


const Example = (props) => {
    const { bannerImage = [] } = props.banner
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === bannerImage.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? bannerImage.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }


    return (
        <div className="banner-img" id="banner-image">
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={bannerImage} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {
                    bannerImage.map((item) => {
                        return (
                            <CarouselItem
                                className="custom-tag"
                                onExiting={() => setAnimating(true)}
                                onExited={() => setAnimating(false)}
                                key={item.url}
                            >
                                <img src={item.url} alt={item.alt} />
                                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                                <a href="#">
                                    <p>Santhana Krishna</p>
                                    <img src="" className="icofont-ui-play" />
                                </a>
                            </CarouselItem>
                        );
                    })
                }
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Example;