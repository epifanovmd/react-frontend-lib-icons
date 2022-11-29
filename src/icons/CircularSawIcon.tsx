import React, { FC, memo } from 'react';
import CircularSawSvg from '../svg/circular-saw.svg';

export interface ICircularSawIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircularSawIcon: FC<ICircularSawIconProps> = memo(props => {
  return <CircularSawSvg {...props} />;
});
