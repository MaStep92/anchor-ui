import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconReport = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M20.8569921,11.5246155 C20.6416075,11.5246155 20.4723767,11.3523078 20.4723767,11.1400001 C20.4723767,6.73384627 16.8877613,3.14923088 12.480069,3.14923088 C12.2646844,3.14923088 12.0954536,2.97692319 12.0954536,2.7646155 C12.0954536,2.55230781 12.2646844,2.38000011 12.480069,2.38000011 C17.3108382,2.38000011 21.2416075,6.30923088 21.2416075,11.1400001 C21.2416075,11.3523078 21.0723767,11.5246155 20.8569921,11.5246155" />
      <path d="M18.3954536,11.5246155 C18.1877613,11.5246155 18.0108382,11.3523078 18.0108382,11.1400001 C18.0108382,8.09000011 15.5339152,5.60923088 12.480069,5.60923088 C12.2646844,5.60923088 12.0954536,5.43692319 12.0954536,5.2246155 C12.0954536,5.01230781 12.2646844,4.84000011 12.480069,4.84000011 C15.9569921,4.84000011 18.780069,7.66615396 18.780069,11.1400001 C18.780069,11.3523078 18.6108382,11.5246155 18.3954536,11.5246155" />
      <path d="M6.24929978,20.9338463 C5.24929978,20.9338463 4.31083824,20.5438463 3.60314593,19.836154 C2.89545362,19.1300001 2.50314593,18.1892309 2.50314593,17.1892309 C2.50314593,16.1892309 2.89545362,15.2484617 3.60314593,14.5407693 L5.43391516,12.7092309 C5.73391516,12.4092309 6.21853055,12.4092309 6.52622285,12.7100001 C6.82622285,13.0107693 6.82622285,13.4976924 6.52622285,13.7976924 L4.68776131,15.6292309 C4.2723767,16.046154 4.04160747,16.6000001 4.04160747,17.1892309 C4.04160747,17.7776924 4.2723767,18.3315386 4.68776131,18.7484617 C5.52622285,19.5846155 6.98006901,19.5823078 7.81083824,18.7484617 L9.64160747,16.916154 C9.94160747,16.616154 10.4262229,16.616154 10.7262229,16.916154 C11.0262229,17.216154 11.0262229,17.7038463 10.7262229,18.0038463 L8.89545362,19.836154 C8.18776131,20.5438463 7.24929978,20.9338463 6.24929978,20.9338463" />
      <path d="M6.66468439,12.4223078 C8.35699208,13.6253847 9.81853055,15.086154 11.0185305,16.7792309 L16.6185305,14.0869232 C14.6339152,11.2453847 12.1954536,8.80692319 9.34929978,6.82076935 L6.66468439,12.4223078 Z M10.7569921,18.5276924 C10.5031459,18.5276924 10.2569921,18.4038463 10.1108382,18.1807693 C8.83391516,16.2384617 7.20314593,14.6053847 5.25699208,13.3276924 C4.93391516,13.116154 4.81853055,12.6984617 4.98776131,12.3515386 L8.34929978,5.35076935 C8.44929978,5.15076935 8.62622285,5.00230781 8.84160747,4.94230781 C9.04929978,4.88307704 9.28006901,4.91923088 9.46468439,5.04076935 C13.0416075,7.38923088 16.0492998,10.3938463 18.4031459,13.9715386 C18.5185305,14.1569232 18.5569921,14.386154 18.4954536,14.6000001 C18.4416075,14.813077 18.2877613,14.9907693 18.0877613,15.0869232 L11.0877613,18.4515386 C10.980069,18.503077 10.8646844,18.5276924 10.7569921,18.5276924 L10.7569921,18.5276924 Z" />
      <path d="M10.4646844,21.3823078 C9.65699208,21.3823078 8.78006901,21.013077 8.06468439,20.3007693 C7.76468439,20.0007693 7.76468439,19.5138463 8.06468439,19.213077 C8.36468439,18.9123078 8.85699208,18.9123078 9.15699208,19.2123078 C9.81853055,19.8784617 10.6416075,19.986154 10.9646844,19.6653847 C11.2646844,19.3638463 11.7492998,19.3646155 12.0492998,19.6646155 C12.3492998,19.9646155 12.3492998,20.4523078 12.0492998,20.7523078 C11.6262229,21.1753847 11.0646844,21.3823078 10.4646844,21.3823078" />
    </g>
  </svg>
);

IconReport.propTypes = {
  color: PropTypes.string
};

IconReport.defaultProps = {
  color: colors.icons
};

IconReport.displayName = 'IconReport';

export default IconReport;
