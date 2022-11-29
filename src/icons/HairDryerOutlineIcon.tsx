import React, { FC, memo } from 'react';
import HairDryerOutlineSvg from '../svg/hair-dryer-outline.svg';

export interface IHairDryerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HairDryerOutlineIcon: FC<IHairDryerOutlineIconProps> = memo(props => {
  return <HairDryerOutlineSvg {...props} />;
});
