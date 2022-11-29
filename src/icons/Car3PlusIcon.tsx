import React, { FC, memo } from 'react';
import Car3PlusSvg from '../svg/car-3-plus.svg';

export interface ICar3PlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Car3PlusIcon: FC<ICar3PlusIconProps> = memo(props => {
  return <Car3PlusSvg {...props} />;
});
