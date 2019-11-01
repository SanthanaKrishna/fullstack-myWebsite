import React, { Component } from 'react'
// import '../container/fashion/fashion.scss';


class GridCollection extends Component {

  render() {
    console.log('this.props', this.props)
    const { tshirt } = this.props;
    return (
      <section className="container grid-collection">
        <div className="row">
          <div className="card-deck">
            {
              tshirt && tshirt.map((items, index) => (
                <div key={index} className="card ">
                  {console.log('item', items)}
                  {
                    items && items.url.map((url, index) => (
                        <img  key={index} className="card-img-top" src={url} alt="" />  
                        //{/* img-thumbnail */}
                    )
                    )}
                  <div className="card-body">
                    <h5 className="card-title">card Title</h5>
                    <p className="card-text"></p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              )
              )}
          </div>
        </div>
      </section>
    )
  }
}
export default GridCollection;
