import React, { FC, memo } from 'react';
import CircleSlice2Svg from '../svg/circle-slice-2.svg';

export interface ICircleSlice2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleSlice2Icon: FC<ICircleSlice2IconProps> = memo(props => {
  return <CircleSlice2Svg {...props} />;
});
