import React, { FC, memo } from 'react';
import CheeseSvg from '../svg/cheese.svg';

export interface ICheeseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheeseIcon: FC<ICheeseIconProps> = memo(props => {
  return <CheeseSvg {...props} />;
});
