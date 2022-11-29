import React, { FC, memo } from 'react';
import ExitRunSvg from '../svg/exit-run.svg';

export interface IExitRunIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExitRunIcon: FC<IExitRunIconProps> = memo(props => {
  return <ExitRunSvg {...props} />;
});
