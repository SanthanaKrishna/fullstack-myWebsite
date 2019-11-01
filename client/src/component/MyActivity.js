import React, { Component } from 'react'

class MyActivity extends Component {
    render() {
        const { activitiesData } = this.props;
        return (
            <section className="activity" id="my-activity">
                <div className="container">
                    <h2 className="title">What we do?</h2>
                    <div className="row">
                        {
                            activitiesData && activitiesData.map((item, index) => (
                                <div key={index} className="col-md-4 activityClm">
                                    <img className="activity-img" src={item.url} alt={item.alt} />
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default MyActivity;