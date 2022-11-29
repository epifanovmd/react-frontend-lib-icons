import React, { FC, memo } from 'react';
import RomanNumeral2Svg from '../svg/roman-numeral-2.svg';

export interface IRomanNumeral2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RomanNumeral2Icon: FC<IRomanNumeral2IconProps> = memo(props => {
  return <RomanNumeral2Svg {...props} />;
});
