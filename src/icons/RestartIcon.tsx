import React, { FC, memo } from 'react';
import RestartSvg from '../svg/restart.svg';

export interface IRestartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RestartIcon: FC<IRestartIconProps> = memo(props => {
  return <RestartSvg {...props} />;
});
