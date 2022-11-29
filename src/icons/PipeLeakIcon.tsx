import React, { FC, memo } from 'react';
import PipeLeakSvg from '../svg/pipe-leak.svg';

export interface IPipeLeakIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PipeLeakIcon: FC<IPipeLeakIconProps> = memo(props => {
  return <PipeLeakSvg {...props} />;
});
