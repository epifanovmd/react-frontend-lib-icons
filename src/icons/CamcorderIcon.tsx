import React, { FC, memo } from 'react';
import CamcorderSvg from '../svg/camcorder.svg';

export interface ICamcorderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CamcorderIcon: FC<ICamcorderIconProps> = memo(props => {
  return <CamcorderSvg {...props} />;
});
