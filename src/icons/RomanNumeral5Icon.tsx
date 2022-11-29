import React, { FC, memo } from 'react';
import RomanNumeral5Svg from '../svg/roman-numeral-5.svg';

export interface IRomanNumeral5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral5Icon: FC<IRomanNumeral5IconProps> = memo(props => {
  return <RomanNumeral5Svg {...props} />;
});
