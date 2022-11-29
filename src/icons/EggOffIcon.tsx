import React, { FC, memo } from 'react';
import EggOffSvg from '../svg/egg-off.svg';

export interface IEggOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EggOffIcon: FC<IEggOffIconProps> = memo(props => {
  return <EggOffSvg {...props} />;
});
