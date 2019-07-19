import React, { Component } from 'react'
import { getProfileDetails } from "../../queries/profileDetails";
import { graphql } from 'react-apollo';


class Profile extends Component {

    render() {
        const { data } = this.props;
        console.log('Profile', data)
        return (
            <div>

            </div>
        )
    }
}

export default graphql(getProfileDetails)(Profile);