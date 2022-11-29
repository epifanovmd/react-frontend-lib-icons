import React, { FC, memo } from 'react';
import LampsSvg from '../svg/lamps.svg';

export interface ILampsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LampsIcon: FC<ILampsIconProps> = memo(props => {
  return <LampsSvg {...props} />;
});
