import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export const RightArrow = ({size = '20', stroke = 'white'}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M4.16663 9.99999H15.8333M15.8333 9.99999L9.99996 4.16666M15.8333 9.99999L9.99996 15.8333"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const LoginIcon = ({size = '20', stroke = 'white'}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5M8.33333 14.1667L12.5 10M12.5 10L8.33333 5.83333M12.5 10H2.5"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const MailIcon = ({size = '20', stroke = 'white'}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M18.3333 5.00001C18.3333 4.08334 17.5833 3.33334 16.6666 3.33334H3.33329C2.41663 3.33334 1.66663 4.08334 1.66663 5.00001M18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6666 16.6667H3.33329C2.41663 16.6667 1.66663 15.9167 1.66663 15V5.00001M18.3333 5.00001L9.99996 10.8333L1.66663 5.00001"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const LeftArrow = ({size = '20', stroke = '#475467'}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M15.8334 10H4.16669M4.16669 10L10 15.8333M4.16669 10L10 4.16667"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const SearchIcon = ({size = '24', stroke = '#101828'}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const EyeCloseIcon = ({size = '22', stroke = '#101828'}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M10.73 5.073C11.1516 5.02419 11.5756 4.99982 12 5C16.664 5 20.4 7.903 22 12C21.6126 12.9966 21.0893 13.9348 20.445 14.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12C3.6 16.097 7.336 19 12 19C13.9321 19.0102 15.8292 18.484 17.48 17.48M9.88 9.88C9.6014 10.1586 9.3804 10.4893 9.22963 10.8534C9.07885 11.2174 9.00125 11.6075 9.00125 12.0015C9.00125 12.3955 9.07885 12.7856 9.22963 13.1496C9.3804 13.5137 9.6014 13.8444 9.88 14.123C10.1586 14.4016 10.4893 14.6226 10.8534 14.7734C11.2174 14.9242 11.6075 15.0018 12.0015 15.0018C12.3955 15.0018 12.7856 14.9242 13.1496 14.7734C13.5137 14.6226 13.8444 14.4016 14.123 14.123"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path d="M4 4L20 20" stroke={stroke} stroke-linecap="round" />
  </Svg>
);

export const EyeIcon = ({size = '22', stroke = '#101828'}) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2 12C3.6 7.903 7.336 5 12 5C16.664 5 20.4 7.903 22 12C20.4 16.097 16.664 19 12 19C7.336 19 3.6 16.097 2 12Z"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export const DownArrow = ({size = '24', stroke = '#475467'}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z"
      fill={stroke}
    />
  </Svg>
);
