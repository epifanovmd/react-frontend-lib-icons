import React, { FC, memo } from 'react';
import LineScanSvg from '../svg/line-scan.svg';

export interface ILineScanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LineScanIcon: FC<ILineScanIconProps> = memo(props => {
  return <LineScanSvg {...props} />;
});
