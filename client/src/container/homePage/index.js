import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { homePage } from './ActionCreator';
import Header from '../../component/header';
import BannerImage from '../../component/bannerImage';
import Example from '../../component/hooksBannerImage';
class Homepage extends Component {
    componentDidMount() {
        this.props.homePage();
    }
    render() {
        const { banner = [] } = this.props.homePageDate;
        return (
            <div>
                <Header />
                {/* <BannerImage banner={banner} /> */}
                <Example banner={banner}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { homePageState = {} } = state;
    const { homePageDate = {} } = homePageState
    return {
        homePageDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        homePage: bindActionCreators(homePage, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
