const theme = {
  breakpoints: {
    mobileMax: 767,
    mobileMedium: 550
  }
};

const colorName = {
  white: "#ffffff",
  veryLightBlue: "#6E7E91",
  lightBlue: "#2188FF",
  blue: "#0366D6",
  darkBlue: "#0366d633",
  lightGray: "#fbfbfe",
  gray: "#E5E5E5",
  iron: "#d1d5da4d",
  black: "#252525"
};

export const light = {
  ...theme,
  colors: {
    primary: colorName.blue,
    textPrimary: colorName.black,
    content: {
      background: colorName.lightGray,
      text: colorName.veryLightBlue
    },
    switchTheme: {
      border: colorName.veryLightBlue,
      background: colorName.iron,
      backgroundIcon: colorName.veryLightBlue,
      icon: colorName.white
    },
    header: {
      primary: colorName.black
    },
    buttonLink: {
      background: colorName.blue,
      text: colorName.white,
      border: colorName.lightGray,
      hover: colorName.lightBlue,
      active: colorName.veryLightBlue
    },
    list: {
      dot: colorName.blue
    },
    section: {
      background: colorName.white,
      text: colorName.veryLightBlue,
      underline: colorName.iron
    },
    loader: {
      animation: colorName.blue,
      border: colorName.iron
    },
    tile: {
      header: colorName.blue,
      background: colorName.white,
      link: colorName.blue,
      linkHover: colorName.lightBlue,
      border: colorName.iron,
      borderHover: colorName.lightBlue
    },
    socials: {
      primary: colorName.black,
      hover: colorName.blue,
      active: colorName.lightBlue
    },
    footer: {
      text: colorName.black,
      primary: colorName.black,
      hover: colorName.blue,
      active: colorName.lightBlue
    }
  }
};