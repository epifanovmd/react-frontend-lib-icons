import React, { FC, memo } from 'react';
import BottleTonicPlusSvg from '../svg/bottle-tonic-plus.svg';

export interface IBottleTonicPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BottleTonicPlusIcon: FC<IBottleTonicPlusIconProps> = memo(props => {
  return <BottleTonicPlusSvg {...props} />;
});
