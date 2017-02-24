import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import { colors } from '../settings';

function IconSettings({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g id="icon_settings" fill={color}>
        <path d="M8.8125,7.02075 C7.83,7.02075 7.0275,7.82475 7.0275,8.8125 C7.0275,9.80025 7.83,10.60425 8.8125,10.60425 C9.8025,10.60425 10.605,9.80025 10.605,8.8125 C10.605,7.82475 9.8025,7.02075 8.8125,7.02075 Z M8.8125,12.10425 C6.9975,12.10425 5.5275,10.6275 5.5275,8.8125 C5.5275,6.9975 6.9975,5.52075 8.8125,5.52075 C10.6275,5.52075 12.105,6.9975 12.105,8.8125 C12.105,10.6275 10.6275,12.10425 8.8125,12.10425 Z M8.0775,16.125 L9.555,16.125 L9.555,15.10275 C9.555,14.496 9.99,13.89225 10.5675,13.69875 L11.0775,13.48425 C11.2275,13.41 11.445,13.35975 11.67,13.35975 C12.0825,13.35975 12.4725,13.51425 12.735,13.78425 L13.4625,14.50725 L14.505,13.46025 L13.785,12.73725 C13.3575,12.30675 13.2375,11.57325 13.5075,11.03025 L13.7175,10.515 C13.89,9.98775 14.4975,9.552 15.105,9.552 L16.125,9.552 L16.125,8.073 L15.105,8.073 C14.4975,8.073 13.89,7.63725 13.7025,7.05975 L13.485,6.5475 C13.2375,6.05325 13.3575,5.3205 13.785,4.89 L14.505,4.1655 L13.4625,3.1185 L12.735,3.8415 C12.315,4.263 11.565,4.38675 11.0325,4.119 L10.515,3.90825 C9.99,3.73425 9.555,3.1305 9.555,2.523 L9.555,1.5 L8.0775,1.5 L8.0775,2.523 C8.0775,3.13125 7.6425,3.735 7.065,3.927 L6.5475,4.1415 C6.405,4.215 6.18,4.266 5.955,4.266 C5.55,4.266 5.16,4.11075 4.89,3.84075 L4.17,3.1185 L3.12,4.1655 L3.8475,4.8885 C4.275,5.3205 4.395,6.05325 4.1175,6.5955 L3.915,7.10925 C3.735,7.63875 3.135,8.073 2.5275,8.073 L1.5,8.073 L1.5,9.552 L2.5275,9.552 C3.135,9.552 3.735,9.98625 3.93,10.56225 L4.1475,11.07975 C4.395,11.57325 4.275,12.30675 3.8475,12.7365 L3.12,13.46025 L4.17,14.50725 L4.89,13.78425 C5.31,13.36425 6.06,13.2375 6.6,13.50675 L7.11,13.71675 C7.65,13.8945 8.0775,14.4855 8.0775,15.10275 L8.0775,16.125 Z M9.78,17.625 L7.8525,17.625 C7.1475,17.625 6.5775,17.05275 6.5775,16.34925 L6.5775,15.10275 L5.9775,14.871 L5.07,15.72675 C4.59,16.20675 3.7425,16.20675 3.2625,15.72675 L1.905,14.36175 C1.665,14.124 1.53,13.803 1.53,13.46025 C1.53,13.11825 1.665,12.79725 1.905,12.55725 L2.7825,11.67675 L2.5275,11.08575 L1.275,11.052 C0.5775,11.052 0,10.4805 0,9.777 L0,7.84875 C0,7.14525 0.5775,6.573 1.275,6.573 L2.5275,6.573 L2.76,5.976 L1.905,5.067 C1.665,4.8285 1.53,4.5075 1.53,4.1655 C1.53,3.82275 1.665,3.50175 1.905,3.26175 L3.2625,1.899 C3.7425,1.419 4.59,1.41825 5.07,1.89975 L5.9475,2.781 L6.54,2.52225 L6.5775,1.27575 C6.5775,0.57225 7.1475,0 7.8525,0 L9.78,0 C10.485,0 11.055,0.57225 11.055,1.27575 L11.055,2.523 L11.655,2.7555 L12.5625,1.899 C12.8025,1.65825 13.125,1.52625 13.4625,1.52625 C13.8,1.52625 14.1225,1.65825 14.3625,1.89825 L15.7275,3.264 C15.9675,3.50175 16.1025,3.82275 16.1025,4.1655 C16.1025,4.5075 15.9675,4.8285 15.7275,5.0685 L14.8425,5.949 L15.105,6.537 L16.35,6.573 C17.055,6.573 17.625,7.14525 17.625,7.84875 L17.625,9.777 C17.625,10.4805 17.055,11.052 16.35,11.052 L15.105,11.052 L14.8725,11.65125 L15.7275,12.55875 C15.9675,12.79725 16.1025,13.11825 16.1025,13.46025 C16.1025,13.803 15.9675,14.124 15.7275,14.364 L14.3625,15.726 C13.8825,16.209 13.0425,16.20675 12.5625,15.72825 L11.6775,14.84475 L11.0925,15.10275 L11.055,16.34925 C11.055,17.05275 10.485,17.625 9.78,17.625 L9.78,17.625 Z" />
      </g>
    </svg>
  );
}

IconSettings.propTypes = {
  color: PropTypes.string
};

IconSettings.defaultProps = {
  color: colors.icons
};

IconSettings.displayName = 'IconSettings';

export default pure(IconSettings);