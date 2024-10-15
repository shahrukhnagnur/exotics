import React, { Component } from 'react'
import Latest from './latest';
import { useNavigate } from 'react-router-dom';
import boat_bassheads_900 from './images/boat_bassheads_900.webp';

export default class Earbuds extends Component {
  constructor(props) {
    super(props);

    this.state=({

    })
  }

 
  render() 
  { const headphone_data = [
    {
      id: 11,
      name: 'boat bassheads 900',
      img: boat_bassheads_900,
      price: '859/-',
      btn: 'Add to Cart'
    },
   
  ]
    return (
      <>
       <div className="container my-3 ">
            <div className="row">
                <h1>Headphones</h1>
            </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-5">
            <div className="row">
              {
                headphone_data.map((val, index, array) => {
                  return (
                    <div className="col-md-3" key={val.id}>
                      <Latest
                        name={val.name}
                        img={val.img}
                        price={val.price}
                        btn={val.btn}
                      />
                    </div>
                  )
                }
                )
              }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
