import React, { FC, memo } from 'react';
import LavaLampSvg from '../svg/lava-lamp.svg';

export interface ILavaLampIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LavaLampIcon: FC<ILavaLampIconProps> = memo(props => {
  return <LavaLampSvg {...props} />;
});
