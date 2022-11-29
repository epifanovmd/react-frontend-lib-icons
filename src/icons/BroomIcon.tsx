import React, { FC, memo } from 'react';
import BroomSvg from '../svg/broom.svg';

export interface IBroomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BroomIcon: FC<IBroomIconProps> = memo(props => {
  return <BroomSvg {...props} />;
});
