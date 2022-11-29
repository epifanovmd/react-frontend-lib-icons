import React, { FC, memo } from 'react';
import PauseCircleSvg from '../svg/pause-circle.svg';

export interface IPauseCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PauseCircleIcon: FC<IPauseCircleIconProps> = memo(props => {
  return <PauseCircleSvg {...props} />;
});
