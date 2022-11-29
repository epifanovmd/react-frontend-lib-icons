import React, { FC, memo } from 'react';
import CylinderOffSvg from '../svg/cylinder-off.svg';

export interface ICylinderOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CylinderOffIcon: FC<ICylinderOffIconProps> = memo(props => {
  return <CylinderOffSvg {...props} />;
});
