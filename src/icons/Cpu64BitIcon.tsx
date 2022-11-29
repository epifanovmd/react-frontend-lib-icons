import React, { FC, memo } from 'react';
import Cpu64BitSvg from '../svg/cpu-64-bit.svg';

export interface ICpu64BitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Cpu64BitIcon: FC<ICpu64BitIconProps> = memo(props => {
  return <Cpu64BitSvg {...props} />;
});
