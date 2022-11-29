import React, { FC, memo } from 'react';
import DecimalIncreaseSvg from '../svg/decimal-increase.svg';

export interface IDecimalIncreaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DecimalIncreaseIcon: FC<IDecimalIncreaseIconProps> = memo(props => {
  return <DecimalIncreaseSvg {...props} />;
});
