import React, { FC, memo } from 'react';
import CircleSlice8Svg from '../svg/circle-slice-8.svg';

export interface ICircleSlice8IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleSlice8Icon: FC<ICircleSlice8IconProps> = memo(props => {
  return <CircleSlice8Svg {...props} />;
});
