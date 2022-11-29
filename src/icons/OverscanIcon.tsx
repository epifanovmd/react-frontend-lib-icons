import React, { FC, memo } from 'react';
import OverscanSvg from '../svg/overscan.svg';

export interface IOverscanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OverscanIcon: FC<IOverscanIconProps> = memo(props => {
  return <OverscanSvg {...props} />;
});
