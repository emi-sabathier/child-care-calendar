const size = {
    small: '320px',
    medium: '425px',
    large: '768px',
    xlarge: '1024px',
    xxlarge: '1440px',
};

export const mediaQueries = {
    mobileSmall: `(min-width: ${size.small})`,
    mobileMedium: `(min-width: ${size.medium})`,
    large: `(min-width: ${size.large})`,
    laptopXlarge: `(min-width: ${size.xlarge})`,
    laptopXXlarge: `(min-width: ${size.xxlarge})`,
};
