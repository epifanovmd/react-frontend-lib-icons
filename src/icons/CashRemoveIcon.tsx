import React, { FC, memo } from 'react';
import CashRemoveSvg from '../svg/cash-remove.svg';

export interface ICashRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashRemoveIcon: FC<ICashRemoveIconProps> = memo(props => {
  return <CashRemoveSvg {...props} />;
});
