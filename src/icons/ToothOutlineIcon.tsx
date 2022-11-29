import React, { FC, memo } from 'react';
import ToothOutlineSvg from '../svg/tooth-outline.svg';

export interface IToothOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToothOutlineIcon: FC<IToothOutlineIconProps> = memo(props => {
  return <ToothOutlineSvg {...props} />;
});
