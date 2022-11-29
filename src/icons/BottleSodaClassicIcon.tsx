import React, { FC, memo } from 'react';
import BottleSodaClassicSvg from '../svg/bottle-soda-classic.svg';

export interface IBottleSodaClassicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleSodaClassicIcon: FC<IBottleSodaClassicIconProps> = memo(props => {
  return <BottleSodaClassicSvg {...props} />;
});
