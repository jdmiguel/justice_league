/** Utils */
import {
  supermanImgPath,
  supermanThumb1Path,
  supermanThumb2Path,
  supermanThumb3Path,
  supermanThumb4Path,
  batmanImgPath,
  batmanThumb1Path,
  batmanThumb2Path,
  batmanThumb3Path,
  batmanThumb4Path,
  wonderWomanImgPath,
  wonderWomanThumb1Path,
  wonderWomanThumb2Path,
  wonderWomanThumb3Path,
  wonderWomanThumb4Path,
  flashImgPath,
  flashThumb1Path,
  flashThumb2Path,
  flashThumb3Path,
  flashThumb4Path,
  greenLanternImgPath,
  greenLanternThumb1Path,
  greenLanternThumb2Path,
  greenLanternThumb3Path,
  greenLanternThumb4Path,
  greenArrowImgPath,
  greenArrowThumb1Path,
  greenArrowThumb2Path,
  greenArrowThumb3Path,
  greenArrowThumb4Path,
  aquamanImgPath,
  aquamanThumb1Path,
  aquamanThumb2Path,
  aquamanThumb3Path,
  aquamanThumb4Path,
  cyborgImgPath,
  cyborgThumb1Path,
  cyborgThumb2Path,
  cyborgThumb3Path,
  cyborgThumb4Path
} from './imgPaths';

const preload = (imageArray, index) => {
  if (imageArray.length > index) {
    const img = new Image();
    img.src = imageArray[index];
    img.onload = () => {
      preload(imageArray, index + 1);
    };
  }
};

const characterImgPreload = () => {
  const imgArray = [
    supermanImgPath,
    supermanThumb1Path,
    supermanThumb2Path,
    supermanThumb3Path,
    supermanThumb4Path,
    batmanImgPath,
    batmanThumb1Path,
    batmanThumb2Path,
    batmanThumb3Path,
    batmanThumb4Path,
    wonderWomanImgPath,
    wonderWomanThumb1Path,
    wonderWomanThumb2Path,
    wonderWomanThumb3Path,
    wonderWomanThumb4Path,
    flashImgPath,
    flashThumb1Path,
    flashThumb2Path,
    flashThumb3Path,
    flashThumb4Path,
    greenLanternImgPath,
    greenLanternThumb1Path,
    greenLanternThumb2Path,
    greenLanternThumb3Path,
    greenLanternThumb4Path,
    greenArrowImgPath,
    greenArrowThumb1Path,
    greenArrowThumb2Path,
    greenArrowThumb3Path,
    greenArrowThumb4Path,
    aquamanImgPath,
    aquamanThumb1Path,
    aquamanThumb2Path,
    aquamanThumb3Path,
    aquamanThumb4Path,
    cyborgImgPath,
    cyborgThumb1Path,
    cyborgThumb2Path,
    cyborgThumb3Path,
    cyborgThumb4Path
  ];

  preload(imgArray, 0);
};

export default characterImgPreload;
