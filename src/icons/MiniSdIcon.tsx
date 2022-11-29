import React, { FC, memo } from 'react';
import MiniSdSvg from '../svg/mini-sd.svg';

export interface IMiniSdIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MiniSdIcon: FC<IMiniSdIconProps> = memo(props => {
  return <MiniSdSvg {...props} />;
});
