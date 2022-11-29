import React, { FC, memo } from 'react';
import RomanNumeral8Svg from '../svg/roman-numeral-8.svg';

export interface IRomanNumeral8IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral8Icon: FC<IRomanNumeral8IconProps> = memo(props => {
  return <RomanNumeral8Svg {...props} />;
});
