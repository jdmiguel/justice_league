import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Utils */
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
import {
  containerCharacter,
  bgCharacter,
  aliasCharacter,
  nameCharacter,
  paragraphCharacter,
  thumbsCharacter,
  imgCharacter,
  backBtnCharacter
} from '../../utils/literals';

class Character extends Component {
  constructor(props) {
    super(props);

    const { characterList, characterActive } = props;
    const character = characterList[characterActive];

    this.state = {
      character
    };

    this.backMenu = this.backMenu.bind(this);
  }

  componentDidMount() {
    inBgCharacter(bgCharacter);
    inAliasCharacter(aliasCharacter);
    inNameCharacter(nameCharacter);
    inParagraphCharacter(paragraphCharacter);
    inThumbsCharacter(thumbsCharacter);
    inImgCharacter(imgCharacter);
    inBackBtnCharacter(backBtnCharacter);
  }

  backMenu() {
    const { onClickBackBtn } = this.props;

    outAliasCharacter(aliasCharacter);
    outNameCharacter(nameCharacter);
    outParagraphCharacter(paragraphCharacter);
    outThumbsCharacter(thumbsCharacter);
    outImgCharacter(imgCharacter);
    outBackBtnCharacter(backBtnCharacter);
    outBgCharacter(bgCharacter);
    outContainerCharacter(containerCharacter, onClickBackBtn);
  }

  render() {
    const { character } = this.state;

    return (
      <div className={`character_container ${character.class}`}>
        <div className={`character_bg ${character.class}`} />
        <div className="character_content container-fluid">
          <div className="character_main row">
            <div className="character_block_left col-lg-5 col-md-12">
              <div className="character_image">
                <img alt={character.alias} src={character.imgPath} />
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
                    <img
                      className="col-lg-3 col-md-6 col-sm-6"
                      alt={character.alias}
                      src={character.thumbPath1}
                    />
                    <img
                      className="col-lg-3 col-md-6 col-sm-6"
                      alt={character.alias}
                      src={character.thumbPath2}
                    />
                    <img
                      className="col-lg-3 col-md-6 col-sm-6"
                      alt={character.alias}
                      src={character.thumbPath3}
                    />
                    <img
                      className="col-lg-3 col-md-6 col-sm-6"
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
