const SECTION_SWITCH_Y = 'SECTION_SWITCH_Y'
const SECTION_SWITCH_X = 'SECTION_SWITCH_X'
const SECTION_RESET = 'SECTION_RESET'
const SWITCH_THEME = 'SWITCH_THEME'

const sectionSwitchY = (up) => {
  return {
    type: SECTION_SWITCH_Y,
    up,
  }
}

const sectionSwitchX = (up) => {
  return {
    type: SECTION_SWITCH_X,
    up,
  }
}

const sectionReset = (onlyX) => {
  return {
    type: SECTION_RESET,
    onlyX,
  }
}

const switchTheme = () => {
  return {
    type: SWITCH_THEME,
  }
}

export {
  SECTION_SWITCH_Y,
  sectionSwitchY,
  SECTION_SWITCH_X,
  sectionSwitchX,
  SECTION_RESET,
  sectionReset,
  SWITCH_THEME,
  switchTheme,
}