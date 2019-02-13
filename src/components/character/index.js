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
      character,
      containerCharacter: null,
      bgCharacter: null,
      aliasCharacter: null,
      nameCharacter: null,
      thumbsCharacter: null,
      imgCharacter: null,
      BackBtnCharacter: null
    };

    this.backMenu = this.backMenu.bind(this);
  }

  componentDidMount() {
    const containerCharacter = document.querySelector('.character_container');
    const bgCharacter = document.querySelector('.character_bg');
    const headerCharacter = document.querySelector('.character_txt_header');
    const aliasCharacter = headerCharacter.querySelector('h1');
    const nameCharacter = headerCharacter.querySelector('h2');
    const paragraphCharacter = document.querySelector('.character_txt_body');
    const thumbsContainerCharacter = document.querySelector(
      '.character_txt_footer_img_container'
    );
    const thumbsCharacter = thumbsContainerCharacter.querySelectorAll('img');
    const imgCharacter = document.querySelector('.character_image');
    const BackBtnCharacter = document.querySelector('.character_btn_back');

    this.setState({
      containerCharacter,
      bgCharacter,
      aliasCharacter,
      nameCharacter,
      paragraphCharacter,
      thumbsCharacter,
      imgCharacter,
      BackBtnCharacter
    });

    inBgCharacter(bgCharacter);
    inAliasCharacter(aliasCharacter);
    inNameCharacter(nameCharacter);
    inParagraphCharacter(paragraphCharacter);
    inThumbsCharacter(thumbsCharacter);
    inImgCharacter(imgCharacter);
    inBackBtnCharacter(BackBtnCharacter);
  }

  backMenu() {
    const { onClickBackBtn } = this.props;
    const {
      containerCharacter,
      bgCharacter,
      aliasCharacter,
      nameCharacter,
      paragraphCharacter,
      thumbsCharacter,
      imgCharacter,
      BackBtnCharacter
    } = this.state;

    outAliasCharacter(aliasCharacter);
    outNameCharacter(nameCharacter);
    outParagraphCharacter(paragraphCharacter);
    outThumbsCharacter(thumbsCharacter);
    outImgCharacter(imgCharacter);
    outBackBtnCharacter(BackBtnCharacter);
    outBgCharacter(bgCharacter);
    outContainerCharacter(containerCharacter, onClickBackBtn);
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
                    <img className="col-lg-3 col-sm-12"
                      alt={character.alias}
                      src={character.thumbPath1}
                    />
                    <img className="col-lg-3 col-sm-12"
                      alt={character.alias}
                      src={character.thumbPath2}
                    />
                    <img className="col-lg-3 col-sm-12"
                      alt={character.alias}
                      src={character.thumbPath3}
                    />
                    <img className="col-lg-3 col-sm-12"
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
