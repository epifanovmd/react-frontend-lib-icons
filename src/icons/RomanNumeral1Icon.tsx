import React, { FC, memo } from 'react';
import RomanNumeral1Svg from '../svg/roman-numeral-1.svg';

export interface IRomanNumeral1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral1Icon: FC<IRomanNumeral1IconProps> = memo(props => {
  return <RomanNumeral1Svg {...props} />;
});
