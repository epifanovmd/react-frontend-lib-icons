import React, { FC, memo } from 'react';
import CircleSlice4Svg from '../svg/circle-slice-4.svg';

export interface ICircleSlice4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleSlice4Icon: FC<ICircleSlice4IconProps> = memo(props => {
  return <CircleSlice4Svg {...props} />;
});
