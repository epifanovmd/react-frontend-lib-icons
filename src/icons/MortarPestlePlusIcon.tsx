import React, { FC, memo } from 'react';
import MortarPestlePlusSvg from '../svg/mortar-pestle-plus.svg';

export interface IMortarPestlePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MortarPestlePlusIcon: FC<IMortarPestlePlusIconProps> = memo(props => {
  return <MortarPestlePlusSvg {...props} />;
});
