import React, { FC, memo } from 'react';
import Car2PlusSvg from '../svg/car-2-plus.svg';

export interface ICar2PlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Car2PlusIcon: FC<ICar2PlusIconProps> = memo(props => {
  return <Car2PlusSvg {...props} />;
});
