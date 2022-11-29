import React, { FC, memo } from 'react';
import HeadsetSvg from '../svg/headset.svg';

export interface IHeadsetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadsetIcon: FC<IHeadsetIconProps> = memo(props => {
  return <HeadsetSvg {...props} />;
});
