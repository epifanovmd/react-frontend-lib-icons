import React, { FC, memo } from 'react';
import RomanNumeral10Svg from '../svg/roman-numeral-10.svg';

export interface IRomanNumeral10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral10Icon: FC<IRomanNumeral10IconProps> = memo(props => {
  return <RomanNumeral10Svg {...props} />;
});
