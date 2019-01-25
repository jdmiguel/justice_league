import React, { Component } from 'react';
import supermanImgPath from '../../../assets/img/character_superman.png';
import supermanImg1ThumbPath from '../../../assets/img/character_wonderwoman_thumb_1.jpg';
import supermanImg2ThumbPath from '../../../assets/img/character_wonderwoman_thumb_2.jpg';
import supermanImg3ThumbPath from '../../../assets/img/character_wonderwoman_thumb_3.jpg';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouseWheel: false
    };
  }

  render() {
    return (
      <div className="character_container superman_int">
        <div className="character_bg superman_int" />
        <div className="character_content container-fluid">
          <div className="character_main row">
            <div className="character_block_left col-lg-5 col-md-12">
              <div className="character_image">
                <img alt="superman" src={supermanImgPath} />
              </div>
            </div>
            <div className="character_block_right col-lg-6 col-md-12">
              <div className="character_txt">
                <div className="character_txt_header">
                  <h1>Superman</h1>
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
                <div className="character_txt_footer">
                  <div className="character_txt_footer_img_container row">
                    <img
                      className="col-lg-4"
                      alt="superman"
                      src={supermanImg1ThumbPath}
                    />
                    <img
                      className="col-lg-4"
                      alt="superman"
                      src={supermanImg2ThumbPath}
                    />
                    <img
                      className="col-lg-4"
                      alt="superman"
                      src={supermanImg3ThumbPath}
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
