import React, { FC, memo } from 'react';
import MagnifyScanSvg from '../svg/magnify-scan.svg';

export interface IMagnifyScanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyScanIcon: FC<IMagnifyScanIconProps> = memo(props => {
  return <MagnifyScanSvg {...props} />;
});
