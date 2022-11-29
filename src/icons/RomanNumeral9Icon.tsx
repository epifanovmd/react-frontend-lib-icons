import React, { FC, memo } from 'react';
import RomanNumeral9Svg from '../svg/roman-numeral-9.svg';

export interface IRomanNumeral9IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral9Icon: FC<IRomanNumeral9IconProps> = memo(props => {
  return <RomanNumeral9Svg {...props} />;
});
