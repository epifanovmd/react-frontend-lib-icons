import React, { FC, memo } from 'react';
import CubeScanSvg from '../svg/cube-scan.svg';

export interface ICubeScanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CubeScanIcon: FC<ICubeScanIconProps> = memo(props => {
  return <CubeScanSvg {...props} />;
});
