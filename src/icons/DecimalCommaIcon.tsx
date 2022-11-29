import React, { FC, memo } from 'react';
import DecimalCommaSvg from '../svg/decimal-comma.svg';

export interface IDecimalCommaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DecimalCommaIcon: FC<IDecimalCommaIconProps> = memo(props => {
  return <DecimalCommaSvg {...props} />;
});
