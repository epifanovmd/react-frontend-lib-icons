import React, { FC, memo } from 'react';
import PizzaSvg from '../svg/pizza.svg';

export interface IPizzaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PizzaIcon: FC<IPizzaIconProps> = memo(props => {
  return <PizzaSvg {...props} />;
});
