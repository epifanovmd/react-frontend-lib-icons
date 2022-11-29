import React, { FC, memo } from 'react';
import RestartOffSvg from '../svg/restart-off.svg';

export interface IRestartOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RestartOffIcon: FC<IRestartOffIconProps> = memo(props => {
  return <RestartOffSvg {...props} />;
});
