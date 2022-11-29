import React, { FC, memo } from 'react';
import CircleSlice6Svg from '../svg/circle-slice-6.svg';

export interface ICircleSlice6IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleSlice6Icon: FC<ICircleSlice6IconProps> = memo(props => {
  return <CircleSlice6Svg {...props} />;
});
