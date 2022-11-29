import React, { FC, memo } from 'react';
import FrenchFriesSvg from '../svg/french-fries.svg';

export interface IFrenchFriesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FrenchFriesIcon: FC<IFrenchFriesIconProps> = memo(props => {
  return <FrenchFriesSvg {...props} />;
});
