import React, { FC, memo } from 'react';
import DecimalCommaDecreaseSvg from '../svg/decimal-comma-decrease.svg';

export interface IDecimalCommaDecreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DecimalCommaDecreaseIcon: FC<IDecimalCommaDecreaseIconProps> = memo(props => {
  return <DecimalCommaDecreaseSvg {...props} />;
});
