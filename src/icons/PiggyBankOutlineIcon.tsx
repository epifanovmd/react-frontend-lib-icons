import React, { FC, memo } from 'react';
import PiggyBankOutlineSvg from '../svg/piggy-bank-outline.svg';

export interface IPiggyBankOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PiggyBankOutlineIcon: FC<IPiggyBankOutlineIconProps> = memo(props => {
  return <PiggyBankOutlineSvg {...props} />;
});
