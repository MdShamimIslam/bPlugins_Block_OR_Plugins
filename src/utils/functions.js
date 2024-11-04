import { produce } from "immer";
import { musicOptions } from './options';

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};

export const updateMusic = (setAttributes,setActiveIndex,musics, index, property, value, childProp = false, secondProp = false) => {
    const newMusic = produce(musics, draft => {
        if (false !== childProp && false !== secondProp) {
            draft[index][property][childProp][secondProp] = value;
        } else if (false !== childProp) {
            draft[index][property][childProp] = value;
        } else {
            draft[index][property] = value;
        }
    });
    setAttributes({ musics: newMusic });
    setActiveIndex(index);
}

export const addNewMusic = (musics,setAttributes,setActiveIndex) => {
    const newMusic = produce(musics, draft => {
        draft.push(musicOptions);
    })
    setAttributes({ musics: newMusic });
    setActiveIndex(musics.length);
}

export const removeMusic = (musics,setAttributes,index) => {
    const newItemByRemove = produce(musics, draft => {
        draft.splice(index, 1);
    });
    setAttributes({ musics: newItemByRemove });
}

export const duplicateMusic = (musics,setAttributes,index) => {
    const musicToDuplicate = musics[index];
    const duplicatedMusic = { ...musicToDuplicate };
    const newMusicItems = [...musics.slice(0, index), duplicatedMusic, ...musics.slice(index)];
    setAttributes({ musics: newMusicItems });
};