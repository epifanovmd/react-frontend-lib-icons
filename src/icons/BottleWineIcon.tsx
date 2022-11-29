import React, { FC, memo } from 'react';
import BottleWineSvg from '../svg/bottle-wine.svg';

export interface IBottleWineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleWineIcon: FC<IBottleWineIconProps> = memo(props => {
  return <BottleWineSvg {...props} />;
});
