import React, { FC, memo } from 'react';
import RunFastSvg from '../svg/run-fast.svg';

export interface IRunFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RunFastIcon: FC<IRunFastIconProps> = memo(props => {
  return <RunFastSvg {...props} />;
});
