import React, { FC, memo } from 'react';
import ShovelSvg from '../svg/shovel.svg';

export interface IShovelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShovelIcon: FC<IShovelIconProps> = memo(props => {
  return <ShovelSvg {...props} />;
});
