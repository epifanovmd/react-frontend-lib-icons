import React, { FC, memo } from 'react';
import PauseCircleOutlineSvg from '../svg/pause-circle-outline.svg';

export interface IPauseCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PauseCircleOutlineIcon: FC<IPauseCircleOutlineIconProps> = memo(props => {
  return <PauseCircleOutlineSvg {...props} />;
});
