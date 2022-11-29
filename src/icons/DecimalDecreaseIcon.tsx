import React, { FC, memo } from 'react';
import DecimalDecreaseSvg from '../svg/decimal-decrease.svg';

export interface IDecimalDecreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DecimalDecreaseIcon: FC<IDecimalDecreaseIconProps> = memo(props => {
  return <DecimalDecreaseSvg {...props} />;
});
