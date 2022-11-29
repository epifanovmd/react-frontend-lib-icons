import React, { FC, memo } from 'react';
import DotsCircleSvg from '../svg/dots-circle.svg';

export interface IDotsCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsCircleIcon: FC<IDotsCircleIconProps> = memo(props => {
  return <DotsCircleSvg {...props} />;
});
