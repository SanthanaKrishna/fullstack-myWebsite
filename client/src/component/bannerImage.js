import React, { Component } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import '../container/homePage/homeSlider.scss';

class BannerImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            setActiveIndex: 0,
            animating: false,
            setAnimating: false
        }
    }
    next = (items) => {
        const { activeIndex, setActiveIndex, animating, setAnimating } = this.state;
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        this.setState({
            setActiveIndex: nextIndex
        })
        // setActiveIndex(nextIndex);
    }
    previous = (items) => {
        const { activeIndex, setActiveIndex, animating, setAnimating } = this.state;
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        this.setState({
            setActiveIndex: nextIndex
        })
    }
    goToIndex = (newIndex) => {
        const { activeIndex, setActiveIndex, animating, setAnimating } = this.state;
        if (animating) return;
        this.setState({
            setActiveIndex: newIndex
        })
    }

    render() {
        const { bannerImage = [] } = this.props.banner;
        const { activeIndex, setActiveIndex, animating, setAnimating } = this.state;
        return (
            <section id="banner-image">
                <Carousel
                    activeIndex={activeIndex}
                    next={() => this.next(bannerImage)}
                    previous={() => this.previous(bannerImage)}
                >
                    <CarouselIndicators items={bannerImage} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {
                        bannerImage.map((item) => {
                            return (
                                <CarouselItem
                                    className="custom-tag"
                                    // tag="div"
                                    key={item.url}
                                    onExiting={() => setAnimating(true)}
                                    onExited={() => setAnimating(false)}
                                >
                                    <img src={item.url} alt={item.alt} />
                                    <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
                                </CarouselItem>
                            );
                        })
                    }
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </section >
        )
    }
}

export default BannerImage;
