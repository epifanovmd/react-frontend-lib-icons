import React, { FC, memo } from 'react';
import DotsTriangleSvg from '../svg/dots-triangle.svg';

export interface IDotsTriangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsTriangleIcon: FC<IDotsTriangleIconProps> = memo(props => {
  return <DotsTriangleSvg {...props} />;
});
