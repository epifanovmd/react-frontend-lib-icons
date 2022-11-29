import React, { FC, memo } from 'react';
import Cpu32BitSvg from '../svg/cpu-32-bit.svg';

export interface ICpu32BitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Cpu32BitIcon: FC<ICpu32BitIconProps> = memo(props => {
  return <Cpu32BitSvg {...props} />;
});
