import React, { FC, memo } from 'react';
import CurrencyMntSvg from '../svg/currency-mnt.svg';

export interface ICurrencyMntIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrencyMntIcon: FC<ICurrencyMntIconProps> = memo(props => {
  return <CurrencyMntSvg {...props} />;
});
