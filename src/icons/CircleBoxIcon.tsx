import React, { FC, memo } from 'react';
import CircleBoxSvg from '../svg/circle-box.svg';

export interface ICircleBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleBoxIcon: FC<ICircleBoxIconProps> = memo(props => {
  return <CircleBoxSvg {...props} />;
});
