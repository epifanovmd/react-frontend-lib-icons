import React, { FC, memo } from 'react';
import CashMultipleSvg from '../svg/cash-multiple.svg';

export interface ICashMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashMultipleIcon: FC<ICashMultipleIconProps> = memo(props => {
  return <CashMultipleSvg {...props} />;
});
