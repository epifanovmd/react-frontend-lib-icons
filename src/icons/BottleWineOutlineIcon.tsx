import React, { FC, memo } from 'react';
import BottleWineOutlineSvg from '../svg/bottle-wine-outline.svg';

export interface IBottleWineOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleWineOutlineIcon: FC<IBottleWineOutlineIconProps> = memo(props => {
  return <BottleWineOutlineSvg {...props} />;
});
