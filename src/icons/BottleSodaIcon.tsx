import React, { FC, memo } from 'react';
import BottleSodaSvg from '../svg/bottle-soda.svg';

export interface IBottleSodaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleSodaIcon: FC<IBottleSodaIconProps> = memo(props => {
  return <BottleSodaSvg {...props} />;
});
