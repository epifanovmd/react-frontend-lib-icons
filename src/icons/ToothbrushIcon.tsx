import React, { FC, memo } from 'react';
import ToothbrushSvg from '../svg/toothbrush.svg';

export interface IToothbrushIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToothbrushIcon: FC<IToothbrushIconProps> = memo(props => {
  return <ToothbrushSvg {...props} />;
});
