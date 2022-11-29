import React, { FC, memo } from 'react';
import CurrencyJpySvg from '../svg/currency-jpy.svg';

export interface ICurrencyJpyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyJpyIcon: FC<ICurrencyJpyIconProps> = memo(props => {
  return <CurrencyJpySvg {...props} />;
});
