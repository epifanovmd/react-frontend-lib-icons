import React, { FC, memo } from 'react';
import PauseSvg from '../svg/pause.svg';

export interface IPauseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PauseIcon: FC<IPauseIconProps> = memo(props => {
  return <PauseSvg {...props} />;
});
