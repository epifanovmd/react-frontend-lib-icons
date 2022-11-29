import React, { FC, memo } from 'react';
import FruitCitrusSvg from '../svg/fruit-citrus.svg';

export interface IFruitCitrusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FruitCitrusIcon: FC<IFruitCitrusIconProps> = memo(props => {
  return <FruitCitrusSvg {...props} />;
});
