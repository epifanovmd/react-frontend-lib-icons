import React, { FC, memo } from 'react';
import FullscreenSvg from '../svg/fullscreen.svg';

export interface IFullscreenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FullscreenIcon: FC<IFullscreenIconProps> = memo(props => {
  return <FullscreenSvg {...props} />;
});
