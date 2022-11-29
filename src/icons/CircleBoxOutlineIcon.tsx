import React, { FC, memo } from 'react';
import CircleBoxOutlineSvg from '../svg/circle-box-outline.svg';

export interface ICircleBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleBoxOutlineIcon: FC<ICircleBoxOutlineIconProps> = memo(props => {
  return <CircleBoxOutlineSvg {...props} />;
});
