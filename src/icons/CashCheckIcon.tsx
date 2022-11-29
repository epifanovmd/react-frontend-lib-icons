import React, { FC, memo } from 'react';
import CashCheckSvg from '../svg/cash-check.svg';

export interface ICashCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashCheckIcon: FC<ICashCheckIconProps> = memo(props => {
  return <CashCheckSvg {...props} />;
});
