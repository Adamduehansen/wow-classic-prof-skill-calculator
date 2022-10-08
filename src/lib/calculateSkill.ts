import {
  CLASSIC_LEVEL_CAP,
  CLASSIC_PROFESSION_CAP,
  TBC_LEVEL_CAP,
  TBC_PROFESSION_CAP,
  WOTLK_LEVEL_CAP,
  WOTLK_PROFESSION_CAP,
} from './constants';

function calculateSkill(level: number): number {
  if (level <= CLASSIC_LEVEL_CAP) {
    return (CLASSIC_PROFESSION_CAP / CLASSIC_LEVEL_CAP) * level;
  } else if (level > CLASSIC_LEVEL_CAP && level < TBC_LEVEL_CAP) {
    return Math.floor(CLASSIC_PROFESSION_CAP + (75 / 10) * (level % 10));
  } else if (level === TBC_LEVEL_CAP) {
    return TBC_PROFESSION_CAP;
  } else if (level > TBC_LEVEL_CAP && level < WOTLK_LEVEL_CAP) {
    return Math.floor(TBC_PROFESSION_CAP + (75 / 10) * (level % 10));
  } else if (level === WOTLK_LEVEL_CAP) {
    return WOTLK_PROFESSION_CAP;
  }
  return 0;
}

export default calculateSkill;
