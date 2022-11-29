import React, { FC, memo } from 'react';
import DecimalSvg from '../svg/decimal.svg';

export interface IDecimalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DecimalIcon: FC<IDecimalIconProps> = memo(props => {
  return <DecimalSvg {...props} />;
});
