import React, { FC, memo } from 'react';
import CurrencyNgnSvg from '../svg/currency-ngn.svg';

export interface ICurrencyNgnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyNgnIcon: FC<ICurrencyNgnIconProps> = memo(props => {
  return <CurrencyNgnSvg {...props} />;
});
