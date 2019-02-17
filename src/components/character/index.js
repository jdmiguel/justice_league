import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  inBgCharacter,
  inImgCharacter,
  inAliasCharacter,
  inNameCharacter,
  inParagraphCharacter,
  inThumbsCharacter,
  inBackBtnCharacter,
  outBgCharacter,
  outImgCharacter,
  outAliasCharacter,
  outNameCharacter,
  outParagraphCharacter,
  outThumbsCharacter,
  outBackBtnCharacter,
  outContainerCharacter
} from '../../utils/animations';

class Character extends Component {
  constructor(props) {
    super(props);

    const { characterList, characterActive } = props;
    const character = characterList[characterActive];

    this.state = {
      character
    };

    this.containerCharacter = null;
    this.blockLeft = null;
    this.blockRight = null;
    this.bgCharacter = null;
    this.headerCharacter = null;
    this.aliasCharacter = null;
    this.nameCharacter = null;
    this.paragraphCharacter = null;
    this.thumbsContainerCharacter = null;
    this.thumbsCharacter = null;
    this.imgCharacter = null;
    this.BackBtnCharacter = null;

    this.backMenu = this.backMenu.bind(this);
  }

  componentDidMount() {
    this.containerCharacter = document.querySelector('.character_container');
    this.blockLeft = document.querySelector('.character_block_left');
    this.blockRight = document.querySelector('.character_block_right');
    this.bgCharacter = document.querySelector('.character_bg');
    this.headerCharacter = document.querySelector('.character_txt_header');
    this.aliasCharacter = this.headerCharacter.querySelector('h1');
    this.nameCharacter = this.headerCharacter.querySelector('h2');
    this.paragraphCharacter = document.querySelector('.character_txt_body');
    this.thumbsContainerCharacter = document.querySelector(
      '.character_txt_footer_img_container'
    );
    this.thumbsCharacter = this.thumbsContainerCharacter.querySelectorAll('img');
    this.imgCharacter = document.querySelector('.character_image');
    this.BackBtnCharacter = document.querySelector('.character_btn_back');

    inBgCharacter(this.bgCharacter);
    inAliasCharacter(this.aliasCharacter);
    inNameCharacter(this.nameCharacter);
    inParagraphCharacter(this.paragraphCharacter);
    inThumbsCharacter(this.thumbsCharacter);
    inImgCharacter(this.imgCharacter);
    inBackBtnCharacter(this.BackBtnCharacter);
  }
  

  backMenu() {
    const { onClickBackBtn } = this.props;

    outAliasCharacter(this.aliasCharacter);
    outNameCharacter(this.nameCharacter);
    outParagraphCharacter(this.paragraphCharacter);
    outThumbsCharacter(this.thumbsCharacter);
    outImgCharacter(this.imgCharacter);
    outBackBtnCharacter(this.BackBtnCharacter);
    outBgCharacter(this.bgCharacter);
    outContainerCharacter(this.containerCharacter, onClickBackBtn);
  }

  render() {
    const { character } = this.state;

    return (
      <div className={`character_container ${character.class}`}>
        <div className={`character_bg ${character.class}`}/>
        <div className="character_content container-fluid">
          <div className="character_main row">
            <div className="character_block_left col-lg-5 col-md-12">
              <div className="character_image">
                <img alt={character.alias} 
                    src={character.imgPath}
                />
              </div>
            </div>
            <div className="character_block_right col-lg-6 col-md-12">
              <div className="character_txt">
                <div className="character_txt_header">
                  <h1>{character.alias}</h1>
                  <h2>{character.name}</h2>
                </div>
                <div className="character_txt_body">
                  <p>{character.description}</p>
                </div>
                <div className="character_txt_footer">
                  <div className="character_txt_footer_img_container row">
                    <img className="col-lg-3 col-md-6 col-sm-6"
                      alt={character.alias}
                      src={character.thumbPath1}
                    />
                    <img className="col-lg-3 col-md-6 col-sm-6"
                      alt={character.alias}
                      src={character.thumbPath2}
                    />
                    <img className="col-lg-3 col-md-6 col-sm-6"
                      alt={character.alias}
                      src={character.thumbPath3}
                    />
                    <img className="col-lg-3 col-md-6 col-sm-6"
                      alt={character.alias}
                      src={character.thumbPath4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="character_btn_back">
          <button type="button" onClick={this.backMenu}>
            BACK TO HOME
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characterList: state.characterRdc.characterList
});

Character.propTypes = {
  characterList: PropTypes.arrayOf(PropTypes.object).isRequired,
  characterActive: PropTypes.number.isRequired,
  onClickBackBtn: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Character);
