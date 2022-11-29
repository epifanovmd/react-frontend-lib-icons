import React, { FC, memo } from 'react';
import RomanNumeral7Svg from '../svg/roman-numeral-7.svg';

export interface IRomanNumeral7IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral7Icon: FC<IRomanNumeral7IconProps> = memo(props => {
  return <RomanNumeral7Svg {...props} />;
});
