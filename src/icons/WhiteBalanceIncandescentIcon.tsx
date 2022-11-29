import React, { FC, memo } from 'react';
import WhiteBalanceIncandescentSvg from '../svg/white-balance-incandescent.svg';

export interface IWhiteBalanceIncandescentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WhiteBalanceIncandescentIcon: FC<IWhiteBalanceIncandescentIconProps> = memo(props => {
  return <WhiteBalanceIncandescentSvg {...props} />;
});
