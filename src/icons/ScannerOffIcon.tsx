import React, { FC, memo } from 'react';
import ScannerOffSvg from '../svg/scanner-off.svg';

export interface IScannerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScannerOffIcon: FC<IScannerOffIconProps> = memo(props => {
  return <ScannerOffSvg {...props} />;
});
