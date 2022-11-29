import React, { FC, memo } from 'react';
import CircleMultipleOutlineSvg from '../svg/circle-multiple-outline.svg';

export interface ICircleMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleMultipleOutlineIcon: FC<ICircleMultipleOutlineIconProps> = memo(props => {
  return <CircleMultipleOutlineSvg {...props} />;
});
