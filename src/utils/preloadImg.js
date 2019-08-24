/** Utils */
import {
  supermanBgPath,
  supermanImgPath,
  supermanThumb1Path,
  supermanThumb2Path,
  supermanThumb3Path,
  supermanThumb4Path,
  batmanBgPath,
  batmanImgPath,
  batmanThumb1Path,
  batmanThumb2Path,
  batmanThumb3Path,
  batmanThumb4Path,
  wonderWomanBgPath,
  wonderWomanImgPath,
  wonderWomanThumb1Path,
  wonderWomanThumb2Path,
  wonderWomanThumb3Path,
  wonderWomanThumb4Path,
  flashBgPath,
  flashImgPath,
  flashThumb1Path,
  flashThumb2Path,
  flashThumb3Path,
  flashThumb4Path,
  greenLanternBgPath,
  greenLanternImgPath,
  greenLanternThumb1Path,
  greenLanternThumb2Path,
  greenLanternThumb3Path,
  greenLanternThumb4Path,
  aquamanBgPath,
  aquamanImgPath,
  aquamanThumb1Path,
  aquamanThumb2Path,
  aquamanThumb3Path,
  aquamanThumb4Path,
  greenArrowBgPath,
  greenArrowImgPath,
  greenArrowThumb1Path,
  greenArrowThumb2Path,
  greenArrowThumb3Path,
  greenArrowThumb4Path,
  cyborgBgPath,
  cyborgImgPath,
  cyborgThumb1Path,
  cyborgThumb2Path,
  cyborgThumb3Path,
  cyborgThumb4Path
} from './imgPaths';

// const preload_ = (imageArray, index) => {
// if (imageArray.length > index) {
// const img = new Image();
// fetch(imageArray[index])
// .then(response => {
// if (response.ok) {
// response.blob().then(miBlob => {
// img.src = URL.createObjectURL(miBlob);
// preload(imageArray, index + 1);
// });
// } else {
// console.log('Respuesta de red OK.');
// }
// })
// .catch(error => {
// console.log(`Hubo un problema con la petición Fetch:${error.message}`);
// });
// }
// };

const preload = (imageArray, index) => {
  if (imageArray.length > index) {
    const img = new Image();
    img.src = imageArray[index];
    img.onload = () => {
      preload(imageArray, index + 1);
    };
  }
};

export const menuBgImgPreload = () => {
  const imgArray = [
    supermanBgPath,
    batmanBgPath,
    wonderWomanBgPath,
    flashBgPath,
    greenLanternBgPath,
    aquamanBgPath,
    greenArrowBgPath,
    cyborgBgPath
  ];

  preload(imgArray, 0);
};
