import React, { FC, memo } from 'react';
import RomanNumeral4Svg from '../svg/roman-numeral-4.svg';

export interface IRomanNumeral4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral4Icon: FC<IRomanNumeral4IconProps> = memo(props => {
  return <RomanNumeral4Svg {...props} />;
});
