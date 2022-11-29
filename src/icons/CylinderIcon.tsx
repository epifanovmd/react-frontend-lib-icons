import React, { FC, memo } from 'react';
import CylinderSvg from '../svg/cylinder.svg';

export interface ICylinderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CylinderIcon: FC<ICylinderIconProps> = memo(props => {
  return <CylinderSvg {...props} />;
});
