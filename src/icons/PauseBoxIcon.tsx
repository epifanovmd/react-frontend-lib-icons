import React, { FC, memo } from 'react';
import PauseBoxSvg from '../svg/pause-box.svg';

export interface IPauseBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PauseBoxIcon: FC<IPauseBoxIconProps> = memo(props => {
  return <PauseBoxSvg {...props} />;
});
