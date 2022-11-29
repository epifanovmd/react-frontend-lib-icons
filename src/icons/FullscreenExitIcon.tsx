import React, { FC, memo } from 'react';
import FullscreenExitSvg from '../svg/fullscreen-exit.svg';

export interface IFullscreenExitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FullscreenExitIcon: FC<IFullscreenExitIconProps> = memo(props => {
  return <FullscreenExitSvg {...props} />;
});
