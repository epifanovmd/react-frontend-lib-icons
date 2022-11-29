import React, { FC, memo } from 'react';
import CogPauseSvg from '../svg/cog-pause.svg';

export interface ICogPauseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogPauseIcon: FC<ICogPauseIconProps> = memo(props => {
  return <CogPauseSvg {...props} />;
});
