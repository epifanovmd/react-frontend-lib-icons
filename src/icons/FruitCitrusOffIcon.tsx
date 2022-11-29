import React, { FC, memo } from 'react';
import FruitCitrusOffSvg from '../svg/fruit-citrus-off.svg';

export interface IFruitCitrusOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FruitCitrusOffIcon: FC<IFruitCitrusOffIconProps> = memo(props => {
  return <FruitCitrusOffSvg {...props} />;
});
