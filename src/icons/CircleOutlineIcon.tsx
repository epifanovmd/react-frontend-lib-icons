import React, { FC, memo } from 'react';
import CircleOutlineSvg from '../svg/circle-outline.svg';

export interface ICircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleOutlineIcon: FC<ICircleOutlineIconProps> = memo(props => {
  return <CircleOutlineSvg {...props} />;
});
