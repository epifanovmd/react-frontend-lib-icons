import React, { FC, memo } from 'react';
import RomanNumeral3Svg from '../svg/roman-numeral-3.svg';

export interface IRomanNumeral3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral3Icon: FC<IRomanNumeral3IconProps> = memo(props => {
  return <RomanNumeral3Svg {...props} />;
});
