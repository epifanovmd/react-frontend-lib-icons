import React, { FC, memo } from 'react';
import HeadsetDockSvg from '../svg/headset-dock.svg';

export interface IHeadsetDockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadsetDockIcon: FC<IHeadsetDockIconProps> = memo(props => {
  return <HeadsetDockSvg {...props} />;
});
