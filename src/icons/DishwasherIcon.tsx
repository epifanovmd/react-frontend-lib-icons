import React, { FC, memo } from 'react';
import DishwasherSvg from '../svg/dishwasher.svg';

export interface IDishwasherIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DishwasherIcon: FC<IDishwasherIconProps> = memo(props => {
  return <DishwasherSvg {...props} />;
});
