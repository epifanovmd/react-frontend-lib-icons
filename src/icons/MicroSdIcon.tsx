import React, { FC, memo } from 'react';
import MicroSdSvg from '../svg/micro-sd.svg';

export interface IMicroSdIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicroSdIcon: FC<IMicroSdIconProps> = memo(props => {
  return <MicroSdSvg {...props} />;
});
