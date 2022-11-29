import React, { FC, memo } from 'react';
import MortarPestleSvg from '../svg/mortar-pestle.svg';

export interface IMortarPestleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MortarPestleIcon: FC<IMortarPestleIconProps> = memo(props => {
  return <MortarPestleSvg {...props} />;
});
