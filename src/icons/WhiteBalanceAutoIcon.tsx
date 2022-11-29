import React, { FC, memo } from 'react';
import WhiteBalanceAutoSvg from '../svg/white-balance-auto.svg';

export interface IWhiteBalanceAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WhiteBalanceAutoIcon: FC<IWhiteBalanceAutoIconProps> = memo(props => {
  return <WhiteBalanceAutoSvg {...props} />;
});
