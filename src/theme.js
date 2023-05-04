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
  semiGray: "#D1D5DA19",
  darkGray: "#363636B7",
  iron: "#d1d5da4d",
  black: "#252525"
};

export const light = {
  ...theme,
  colors: {
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
      header: colorName.black,
      background: colorName.white,
      text: colorName.veryLightBlue,
      underline: colorName.iron
    },
    loader: {
      textPrimary: colorName.black,
      animation: colorName.blue,
      border: colorName.iron
    },
    error: {
      text: colorName.black
    },
    tile: {
      header: colorName.blue,
      background: colorName.white,
      link: colorName.blue,
      linkHover: colorName.lightBlue,
      borderBottom: colorName.iron,
      border: colorName.lightBlue,
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

export const dark = {
  ...theme,
  colors: {
    textPrimary: colorName.white,
    content: {
      background: colorName.black,
      text: colorName.white
    },
    switchTheme: {
      border: colorName.white,
      background: colorName.iron,
      backgroundIcon: colorName.white,
      icon: colorName.black
    },
    header: {
      primary: colorName.white
    },
    buttonLink: {
      background: colorName.lightBlue,
      text: colorName.white,
      border: colorName.lightGray,
      hover: colorName.lightBlue,
      active: colorName.veryLightBlue
    },
    list: {
      dot: colorName.blue
    },
    section: {
      header: colorName.white,
      background: colorName.darkGray,
      text: colorName.white,
      underline: colorName.semiGray
    },
    loader: {
      textPrimary: colorName.white,
      animation: colorName.lightBlue,
      border: colorName.darkGray
    },
    error: {
      text: colorName.white,
      icon: colorName.white
    },
    tile: {
      header: colorName.white,
      background: colorName.semiGray,
      link: colorName.blue,
      linkHover: colorName.lightBlue,
      border: colorName.blue,
      borderBottom: colorName.iron,
      borderHover: colorName.lightBlue
    },
    socials: {
      primary: colorName.white,
      hover: colorName.lightBlue,
      active: colorName.veryLightBlue
    },
    footer: {
      text: colorName.white,
      primary: colorName.white,
      hover: colorName.lightBlue,
      active: colorName.veryLightBlue
    }
  }
};