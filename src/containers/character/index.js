import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import supermanImgPath from '../../../assets/img/character_superman.png';
import supermanImg1ThumbPath from '../../../assets/img/character_superman_thumb_1.jpg';
import supermanImg2ThumbPath from '../../../assets/img/character_superman_thumb_2.jpg';
import supermanImg3ThumbPath from '../../../assets/img/character_superman_thumb_3.jpg';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouseWheel: false
    };
  }

  render() {
    const { characterList } = this.props;
    const [
      item0,
      item1,
      item2,
      item3,
      item4,
      item,
      item6,
      item7
    ] = characterList;

    return (
      <div className={`character_container ${item.class}`}>
        <div className={`character_bg ${item.class}`} />
        <div className="character_content container-fluid">
          <div className="character_main row">
            <div className="character_block_left col-lg-5 col-md-12">
              <div className="character_image">
                <img alt="superman" src={item.imgPath} />
              </div>
            </div>
            <div className="character_block_right col-lg-6 col-md-12">
              <div className="character_txt">
                <div className="character_txt_header">
                  <h1>{item.alias}</h1>
                  <h2>{item.name}</h2>
                </div>
                <div className="character_txt_body">
                  <p>{item.description}</p>
                </div>
                <div className="character_txt_footer">
                  <div className="character_txt_footer_img_container row">
                    <img
                      className="col-lg-4 col-sm-12"
                      alt="superman"
                      src={item.thumbPath1}
                    />
                    <img
                      className="col-lg-4 col-sm-12"
                      alt="superman"
                      src={item.thumbPath2}
                    />
                    <img
                      className="col-lg-4 col-sm-12"
                      alt="superman"
                      src={item.thumbPath3}
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

const mapStateToProps = state => ({
  characterList: state.characterRdc.characterList
});

/*
Character.propTypes = {
  superheroesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  counterActivateSuperhero: PropTypes.number.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
}; */

export default connect(
  mapStateToProps,
  null
)(Character);
