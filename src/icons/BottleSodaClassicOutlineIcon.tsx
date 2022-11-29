import React, { FC, memo } from 'react';
import BottleSodaClassicOutlineSvg from '../svg/bottle-soda-classic-outline.svg';

export interface IBottleSodaClassicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleSodaClassicOutlineIcon: FC<IBottleSodaClassicOutlineIconProps> = memo(props => {
  return <BottleSodaClassicOutlineSvg {...props} />;
});
