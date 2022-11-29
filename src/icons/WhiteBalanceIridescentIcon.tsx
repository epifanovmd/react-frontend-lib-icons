import React, { FC, memo } from 'react';
import WhiteBalanceIridescentSvg from '../svg/white-balance-iridescent.svg';

export interface IWhiteBalanceIridescentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WhiteBalanceIridescentIcon: FC<IWhiteBalanceIridescentIconProps> = memo(props => {
  return <WhiteBalanceIridescentSvg {...props} />;
});
