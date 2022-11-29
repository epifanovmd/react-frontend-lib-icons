import React, { FC, memo } from 'react';
import CashPlusSvg from '../svg/cash-plus.svg';

export interface ICashPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashPlusIcon: FC<ICashPlusIconProps> = memo(props => {
  return <CashPlusSvg {...props} />;
});
