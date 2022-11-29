import React, { FC, memo } from 'react';
import ScanHelperSvg from '../svg/scan-helper.svg';

export interface IScanHelperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScanHelperIcon: FC<IScanHelperIconProps> = memo(props => {
  return <ScanHelperSvg {...props} />;
});
