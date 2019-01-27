import React, { Component } from 'react';
import cyborgImgPath from '../../../assets/img/character_cyborg.png';
import cyborgImg1ThumbPath from '../../../assets/img/character_cyborg_thumb_1.jpg';
import cyborgImg2ThumbPath from '../../../assets/img/character_cyborg_thumb_2.jpg';
import cyborgImg3ThumbPath from '../../../assets/img/character_cyborg_thumb_3.jpg';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouseWheel: false
    };
  }

  render() {
    return (
      <div className="character_container cyborg_int">
        <div className="character_bg cyborg_int" />
        <div className="character_content container-fluid">
          <div className="character_main row">
            <div className="character_block_left col-lg-5 col-md-12">
              <div className="character_image">
                <img alt="cyborg" src={cyborgImgPath} />
              </div>
            </div>
            <div className="character_block_right col-lg-6 col-md-12">
              <div className="character_txt">
                <div className="character_txt_header">
                  <h1>cyborg</h1>
                  <h2>Clark Kent</h2>
                </div>
                <div className="character_txt_body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamcoum.
                  </p>
                </div>
                <div className="character_txt_footer container">
                  <div className="character_txt_footer_img_container row">
                    <img
                      className="col-lg-4"
                      alt="cyborg"
                      src={cyborgImg1ThumbPath}
                    />
                    <img
                      className="col-lg-4"
                      alt="cyborg"
                      src={cyborgImg2ThumbPath}
                    />
                    <img
                      className="col-lg-4"
                      alt="cyborg"
                      src={cyborgImg3ThumbPath}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="character_btn_back">
          <button type="button">BACK TO HOME</button>
        </div>
      </div>
    );
  }
}

export default Character;
