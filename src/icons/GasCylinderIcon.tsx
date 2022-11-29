import React, { FC, memo } from 'react';
import GasCylinderSvg from '../svg/gas-cylinder.svg';

export interface IGasCylinderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GasCylinderIcon: FC<IGasCylinderIconProps> = memo(props => {
  return <GasCylinderSvg {...props} />;
});
