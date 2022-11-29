import React, { FC, memo } from 'react';
import PlusMinusSvg from '../svg/plus-minus.svg';

export interface IPlusMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusMinusIcon: FC<IPlusMinusIconProps> = memo(props => {
  return <PlusMinusSvg {...props} />;
});
