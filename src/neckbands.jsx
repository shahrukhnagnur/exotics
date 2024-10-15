import React, { Component } from 'react'
import Latest from './latest';
import boat_rockerz_pro from './images/boat_rockerz_150_pro.webp';
import noise_nerve_neckband from './images/noise_nerve_neckband.png';
import leaf_rush_x168 from './images/leaf_rush_x168.webp';
import noise_airwave_pro from './images/noise_airwave_pro.webp'
export default class Neckbands extends Component {
  constructor(props) {
    super(props);

    this.state=({

    })
  }
  render() {
    const neckbands_data = [
      {
        id: 21,
        name: 'boat rockerz 150 pro ',
        img: boat_rockerz_pro,
        price: '999/-',
        btn: 'Add to Cart'
      },
      {
        id: 22,
        name: 'leaf rush x168',
        img: leaf_rush_x168,
        price: '1299/-',
        btn: 'Add to Cart'
      },
      {
        id: 23,
        name:'noise aiwave pro',
        img: noise_airwave_pro,
        price: '1499/-',
        btn: 'Add to Cart'
      },
      {
        id:24,
        name: 'noise nerve neckband',
        img: noise_nerve_neckband,
        price:'999/-',
        btn: 'Add to Cart'
      }
    ]

    return (
      <>
        <div className="container my-3 ">
            <div className="row">
                <h1>Neckbands</h1>
            </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-5">
            <div className="row">
              {
                neckbands_data.map((val, index, array) => {
                  return (
                    <div className="col-md-3">
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
