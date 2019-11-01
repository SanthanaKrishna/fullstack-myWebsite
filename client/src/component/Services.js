import React, { Component } from 'react'
import '../container/homePage/homeSlider.scss';


class LookingFor extends Component {
    render() {
        const { servicesData } = this.props;
        return (
            <section className="container services" id="services">
                <h3 className="title">What are you looking for</h3>
                <div className="row">
                    <div className="card-deck">
                        {
                            servicesData.map((data, key) => (
                                <div key={key} className="col-md-4">
                                    <div className="card">
                                        <img src="" className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.description}</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div >
                <div className="service-button">
                    <button type="button" className="btn btn-primary">All services</button>
                </div>
            </section>
        )
    }
}
export default LookingFor;