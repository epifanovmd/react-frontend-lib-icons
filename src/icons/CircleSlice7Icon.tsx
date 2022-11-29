import React, { FC, memo } from 'react';
import CircleSlice7Svg from '../svg/circle-slice-7.svg';

export interface ICircleSlice7IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleSlice7Icon: FC<ICircleSlice7IconProps> = memo(props => {
  return <CircleSlice7Svg {...props} />;
});
