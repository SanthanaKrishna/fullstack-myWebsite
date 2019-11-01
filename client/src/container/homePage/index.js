import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { homePage } from './ActionCreator';
import Header from '../../component/Header';
// import BannerImage from '../../component/bannerImage';
import BannerImage from '../../component/HooksBannerImage';
import Services from '../../component/Services';
import Collection from '../../component/GridCollection';
import MyActivity from '../../component/MyActivity';
import AboutUs from '../../component/AboutUs';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.lookingFor = React.createRef()
    }

    ScrollToElement = (event) => {
        let refElement;
        refElement = event;
        window.scroll({
            top: refElement.current.offsetTop - (window.innerWidth < 767 ? 45 : 55),
            left: refElement.current.offsetLeft,
            behavior: "smooth"
        })
    }

    componentDidMount() {
        this.props.homePage();
    }
    render() {
        const { banner, myActivity, services } = this.props;
        return (
            <div>
                {/* <BannerImage banner={banner} /> */}
                {/* <BannerImage banner={banner} /> */}
                <MyActivity activitiesData={myActivity} />
                <Services servicesData={services} />
                <AboutUs />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { homePageState = {} } = state;
    const { homePageDate = {} } = homePageState;
    const { banner = [], myActivity = [], services = [] } = homePageDate;
    return {
        banner,
        myActivity,
        services
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        homePage: bindActionCreators(homePage, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
