import React, { FC, memo } from 'react';
import CheeseOffSvg from '../svg/cheese-off.svg';

export interface ICheeseOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheeseOffIcon: FC<ICheeseOffIconProps> = memo(props => {
  return <CheeseOffSvg {...props} />;
});
