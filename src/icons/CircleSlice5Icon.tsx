import React, { FC, memo } from 'react';
import CircleSlice5Svg from '../svg/circle-slice-5.svg';

export interface ICircleSlice5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleSlice5Icon: FC<ICircleSlice5IconProps> = memo(props => {
  return <CircleSlice5Svg {...props} />;
});
