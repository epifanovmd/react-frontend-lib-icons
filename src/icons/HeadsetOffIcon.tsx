import React, { FC, memo } from 'react';
import HeadsetOffSvg from '../svg/headset-off.svg';

export interface IHeadsetOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadsetOffIcon: FC<IHeadsetOffIconProps> = memo(props => {
  return <HeadsetOffSvg {...props} />;
});
