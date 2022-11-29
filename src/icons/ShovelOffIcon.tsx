import React, { FC, memo } from 'react';
import ShovelOffSvg from '../svg/shovel-off.svg';

export interface IShovelOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShovelOffIcon: FC<IShovelOffIconProps> = memo(props => {
  return <ShovelOffSvg {...props} />;
});
