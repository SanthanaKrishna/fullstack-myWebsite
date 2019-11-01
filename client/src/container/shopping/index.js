import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { shoppingPage } from './ActionCreator';
import BannerImage from '../../component/HooksBannerImage';
import GridCollection from '../../component/GridCollection';


class Shopping extends Component {

    componentDidMount() {
        this.props.shoppingPage();
    }
    render() {
        const { banner, category } = this.props;
        console.log('category', category);
        const { mens: { tshirt = [] } = {} } = category;
        return (
            <div className="">
                {/* <BannerImage banner={banner} /> */}
                <GridCollection tshirt={tshirt} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { fashionPageState = {} } = state;
    console.log('fashionPageState;', state)
    const { fashionPageData = {} } = fashionPageState;
    const { banner = [], category = {} } = fashionPageData;
    return {
        banner,
        category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        shoppingPage: bindActionCreators(shoppingPage, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);