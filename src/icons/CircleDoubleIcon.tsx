import React, { FC, memo } from 'react';
import CircleDoubleSvg from '../svg/circle-double.svg';

export interface ICircleDoubleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleDoubleIcon: FC<ICircleDoubleIconProps> = memo(props => {
  return <CircleDoubleSvg {...props} />;
});
