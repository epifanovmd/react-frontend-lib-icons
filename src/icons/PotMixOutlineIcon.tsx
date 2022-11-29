import React, { FC, memo } from 'react';
import PotMixOutlineSvg from '../svg/pot-mix-outline.svg';

export interface IPotMixOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PotMixOutlineIcon: FC<IPotMixOutlineIconProps> = memo(props => {
  return <PotMixOutlineSvg {...props} />;
});
