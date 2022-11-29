import React, { FC, memo } from 'react';
import PipeValveSvg from '../svg/pipe-valve.svg';

export interface IPipeValveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PipeValveIcon: FC<IPipeValveIconProps> = memo(props => {
  return <PipeValveSvg {...props} />;
});
