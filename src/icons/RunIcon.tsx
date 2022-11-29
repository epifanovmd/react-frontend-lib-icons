import React, { FC, memo } from 'react';
import RunSvg from '../svg/run.svg';

export interface IRunIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RunIcon: FC<IRunIconProps> = memo(props => {
  return <RunSvg {...props} />;
});
