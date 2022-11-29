import React, { FC, memo } from 'react';
import CurrencyRubSvg from '../svg/currency-rub.svg';

export interface ICurrencyRubIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyRubIcon: FC<ICurrencyRubIconProps> = memo(props => {
  return <CurrencyRubSvg {...props} />;
});
