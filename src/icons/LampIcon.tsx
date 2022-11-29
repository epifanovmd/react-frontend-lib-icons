import React, { FC, memo } from 'react';
import LampSvg from '../svg/lamp.svg';

export interface ILampIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LampIcon: FC<ILampIconProps> = memo(props => {
  return <LampSvg {...props} />;
});
