import React, { FC, memo } from 'react';
import RomanNumeral6Svg from '../svg/roman-numeral-6.svg';

export interface IRomanNumeral6IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral6Icon: FC<IRomanNumeral6IconProps> = memo(props => {
  return <RomanNumeral6Svg {...props} />;
});
