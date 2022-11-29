import React, { FC, memo } from 'react';
import WhiteBalanceSunnySvg from '../svg/white-balance-sunny.svg';

export interface IWhiteBalanceSunnyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WhiteBalanceSunnyIcon: FC<IWhiteBalanceSunnyIconProps> = memo(props => {
  return <WhiteBalanceSunnySvg {...props} />;
});
