import React, { FC, memo } from 'react';
import PiggyBankSvg from '../svg/piggy-bank.svg';

export interface IPiggyBankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PiggyBankIcon: FC<IPiggyBankIconProps> = memo(props => {
  return <PiggyBankSvg {...props} />;
});
