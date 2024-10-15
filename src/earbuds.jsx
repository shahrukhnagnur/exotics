import React, { Component } from 'react'
import Latest from './latest';
import buds_trance from './images/buds_trance.webp';
import air_buds_plus from './images/air_buds_plus.webp'
import noise_verve_2 from './images/buds_verve_2.webp'
import buds_x_prime from './images/buds_x_prime.webp'
import hammer_duopods from './images/hammer_duopods.webp';
import hammer_aero_max from './images/hammer_aero_max.webp';

export default class Earbuds extends Component {
  constructor(props) {
    super(props);

    this.state = ({

    })
  }

  render() {
    const earbuds_data = [
      {
        id: 5,
        name: 'noise trance buds',
        img: buds_trance,
        price: '999/-',
        btn: 'Add to Cart'
      },
      {
        id: 6,
        name: 'noise air buds +',
        img: air_buds_plus,
        price: '1699/-',
        btn: 'Add to Cart'
      },
      {
        id: 7,
        name: 'noise verve 2',
        img: noise_verve_2,
        price: '1299/-',
        btn: 'Add to Cart'
      },
      {
        id: 8,
        name: 'noise buds x prime',
        img: buds_x_prime,
        price: '1099/-',
        btn: 'Add to Cart'
      },
      {
        id: 9,
        name: 'hammer duopods',
        img: hammer_duopods,
        price: '699/-',
        btn: 'Add to Cart'
      },
      {
        id: 10,
        name: 'hammer aero max',
        img: hammer_aero_max,
        price: '1499/-',
        btn: 'add to cart'
      }
    ]


    return (
      <>
        <div className="container my-3">
          <div className="row">
            <h1>Earbuds</h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-4">
              <div className="row">
                {
                  earbuds_data.map((val, index, array) => {
                    return (
                      <div className="col-md-3 my-auto" key={val.id}>
                        <Latest
                          id={val.id}
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
