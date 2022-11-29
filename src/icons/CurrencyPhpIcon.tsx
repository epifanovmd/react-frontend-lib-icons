import React, { FC, memo } from 'react';
import CurrencyPhpSvg from '../svg/currency-php.svg';

export interface ICurrencyPhpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyPhpIcon: FC<ICurrencyPhpIconProps> = memo(props => {
  return <CurrencyPhpSvg {...props} />;
});
