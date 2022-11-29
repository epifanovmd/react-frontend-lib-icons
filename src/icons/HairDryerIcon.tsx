import React, { FC, memo } from 'react';
import HairDryerSvg from '../svg/hair-dryer.svg';

export interface IHairDryerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HairDryerIcon: FC<IHairDryerIconProps> = memo(props => {
  return <HairDryerSvg {...props} />;
});
