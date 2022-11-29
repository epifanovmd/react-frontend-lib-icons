import React, { FC, memo } from 'react';
import BeekeeperSvg from '../svg/beekeeper.svg';

export interface IBeekeeperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeekeeperIcon: FC<IBeekeeperIconProps> = memo(props => {
  return <BeekeeperSvg {...props} />;
});
