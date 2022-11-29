import React, { FC, memo } from 'react';
import BottleSodaOutlineSvg from '../svg/bottle-soda-outline.svg';

export interface IBottleSodaOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleSodaOutlineIcon: FC<IBottleSodaOutlineIconProps> = memo(props => {
  return <BottleSodaOutlineSvg {...props} />;
});
