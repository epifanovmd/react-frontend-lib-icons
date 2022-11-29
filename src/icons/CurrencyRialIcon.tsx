import React, { FC, memo } from 'react';
import CurrencyRialSvg from '../svg/currency-rial.svg';

export interface ICurrencyRialIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyRialIcon: FC<ICurrencyRialIconProps> = memo(props => {
  return <CurrencyRialSvg {...props} />;
});
