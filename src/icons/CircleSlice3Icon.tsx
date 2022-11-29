import React, { FC, memo } from 'react';
import CircleSlice3Svg from '../svg/circle-slice-3.svg';

export interface ICircleSlice3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleSlice3Icon: FC<ICircleSlice3IconProps> = memo(props => {
  return <CircleSlice3Svg {...props} />;
});
