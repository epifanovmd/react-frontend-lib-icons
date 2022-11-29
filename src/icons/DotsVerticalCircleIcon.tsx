import React, { FC, memo } from 'react';
import DotsVerticalCircleSvg from '../svg/dots-vertical-circle.svg';

export interface IDotsVerticalCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsVerticalCircleIcon: FC<IDotsVerticalCircleIconProps> = memo(props => {
  return <DotsVerticalCircleSvg {...props} />;
});
