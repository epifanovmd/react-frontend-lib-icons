import React, { FC, memo } from 'react';
import DotsHorizontalCircleSvg from '../svg/dots-horizontal-circle.svg';

export interface IDotsHorizontalCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsHorizontalCircleIcon: FC<IDotsHorizontalCircleIconProps> = memo(props => {
  return <DotsHorizontalCircleSvg {...props} />;
});
