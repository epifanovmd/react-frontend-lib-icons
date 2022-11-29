import React, { FC, memo } from 'react';
import DecimalCommaIncreaseSvg from '../svg/decimal-comma-increase.svg';

export interface IDecimalCommaIncreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DecimalCommaIncreaseIcon: FC<IDecimalCommaIncreaseIconProps> = memo(props => {
  return <DecimalCommaIncreaseSvg {...props} />;
});
