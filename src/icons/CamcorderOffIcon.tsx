import React, { FC, memo } from 'react';
import CamcorderOffSvg from '../svg/camcorder-off.svg';

export interface ICamcorderOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CamcorderOffIcon: FC<ICamcorderOffIconProps> = memo(props => {
  return <CamcorderOffSvg {...props} />;
});
