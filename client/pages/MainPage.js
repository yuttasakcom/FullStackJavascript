import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

class MainPage extends Component {
  state = {
    albums: [
      { id: 1, name: 'A', image: 'clearday.jpg' },
      { id: 2, name: 'B', image: 'energy.jpg' },
      { id: 3, name: 'C', image: 'funkyelement.jpg' },
      { id: 4, name: 'D', image: 'goinghigher.jpg' },
      { id: 5, name: 'E', image: 'popdance.jpg' },
      { id: 6, name: 'F', image: 'sweet.jpg' },
      { id: 7, name: 'G', image: 'ukulele.jpg' }
    ]
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="mainContainer">
          <div className="topContainer">
            <div className="mainviewContainer">
              <div className="mainContent">
                <h1 className="pageHeadingBig text-center">
                  You Might Also Like
                </h1>
                <div className="gridViewContainer">
                  {this.state.albums.map(album => {
                    return (
                      <div className="gridViewItem" key={album.id}>
                        <Link to={`/albums/${album.id}`}>
                          <img
                            src={`/statics/img/artwork/${album.image}`}
                            alt={album.name}
                          />
                          <div className="gridViewInfo">{album.name}</div>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

export default {
  component: MainPage
}
