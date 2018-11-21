import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'

import Img1 from '../assets/images/1.jpg';
import Img2 from '../assets/images/2.jpg';
import Img3 from '../assets/images/3.jpg';
import Img4 from '../assets/images/4.jpg';
import Img5 from '../assets/images/5.jpg';
import Img6 from '../assets/images/6.jpg';
import Img7 from '../assets/images/7.jpg';
import Img8 from '../assets/images/8.jpg';
import Img9 from '../assets/images/9.jpg';
import Img10 from '../assets/images/10.jpg';
import Img11 from '../assets/images/11.jpg';
import Img12 from '../assets/images/12.jpg';
import Img13 from '../assets/images/13.jpg';
import Img14 from '../assets/images/14.jpg';
import Img15 from '../assets/images/15.jpg';
import Img16 from '../assets/images/16.jpg';
import Img17 from '../assets/images/17.jpg';

class Slideshow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }

    }

    render() {
        return (
            <div className="slideshow">
                <Header />
                <div className="slide slide--layout-1 slide--current">
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img1})` }}
                            >
                            </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Black cappuccino sugar</h3>
                            <p className="slide__figure-description">Plunger pot dripper crema sit coffee</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img2})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Cup white foam</h3>
                            <p className="slide__figure-description">Mug that steamed to go</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img3})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Aroma mocha</h3>
                            <p className="slide__figure-description">Foam trifecta</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img4})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Seasonal et dripper</h3>
                            <p className="slide__figure-description">Trifecta foam, con panna caffeine</p>
                        </figcaption>
                    </figure>
                    <span className="slide__number slide__number--left">1</span>
                    <span className="slide__number slide__number--right">2</span>
                </div>
                <div className="slide slide--layout-2">
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img5})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Carajillo percolator</h3>
                            <p className="slide__figure-description">White sugar plunger pot half</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img6})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Cortado organic skinny</h3>
                            <p className="slide__figure-description">As aromatic, grinder turkish</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img7})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Qui coffee, americano</h3>
                            <p className="slide__figure-description">Espresso percolator iced rich</p>
                        </figcaption>
                    </figure>
                    <span className="slide__number slide__number--left">3</span>
                    <span className="slide__number slide__number--right">4</span>
                </div>
                <div className="slide slide--layout-3">
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img8})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">White filter</h3>
                            <p className="slide__figure-description">Breve, brewed ristretto rich arabica</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img9})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Java half and half</h3>
                            <p className="slide__figure-description">Et aged so, sweet cup</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img10})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Steamed et mazagran</h3>
                            <p className="slide__figure-description">As cultivar froth fair trade</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img11})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Coffee mazagran eu</h3>
                            <p className="slide__figure-description">Breve seasonal frappuccino</p>
                        </figcaption>
                    </figure>
                    <span className="slide__number slide__number--left">5</span>
                    <span className="slide__number slide__number--right">6</span>
                </div>
                <div className="slide slide--layout-4">
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img12})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Kopi-luwak body</h3>
                            <p className="slide__figure-description">Affogato steamed single shot</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img13})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Ut crema eu cultivar</h3>
                            <p className="slide__figure-description">Black flavour qui robusta</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img14})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Sit, in americano iced acerbic</h3>
                            <p className="slide__figure-description">Macchiato whipped, chicory mug</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img15})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">At redeye, white foam extra</h3>
                            <p className="slide__figure-description">Variety black grounds espresso</p>
                        </figcaption>
                    </figure>
                    <span className="slide__number slide__number--left">7</span>
                    <span className="slide__number slide__number--right">8</span>
                </div>
                <div className="slide slide--layout-5">
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img16})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Aftertaste roast</h3>
                            <p className="slide__figure-description">Instant extra beans decaffeinated</p>
                        </figcaption>
                    </figure>
                    <figure className="slide__figure">
                        <div className="slide__figure-inner">
                            <div
                                className="slide__figure-img"
                                style={{ backgroundImage: `url(${Img17})` }}
                            > </div>
                            <div className="slide__figure-reveal"></div>
                        </div>
                        <figcaption>
                            <h3 className="slide__figure-title">Brewed sit in instant shop</h3>
                            <p className="slide__figure-description">Blue mountain, java crema</p>
                        </figcaption>
                    </figure>
                    <span className="slide__number slide__number--left">9</span>
                    <span className="slide__number slide__number--right">10</span>
                </div>

                <div className="revealer">
                    <div className="revealer__item revealer__item--left"></div>
                    <div className="revealer__item revealer__item--right"></div>
                </div>
            </div >
        )
    }
}

Slideshow.propTypes = {
    current: PropTypes.number,
}

export default Slideshow
