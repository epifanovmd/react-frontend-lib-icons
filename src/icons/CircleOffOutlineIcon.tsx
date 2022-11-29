import React, { FC, memo } from 'react';
import CircleOffOutlineSvg from '../svg/circle-off-outline.svg';

export interface ICircleOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleOffOutlineIcon: FC<ICircleOffOutlineIconProps> = memo(props => {
  return <CircleOffOutlineSvg {...props} />;
});
