import React, { FC, memo } from 'react';
import TriangleOutlineSvg from '../svg/triangle-outline.svg';

export interface ITriangleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TriangleOutlineIcon: FC<ITriangleOutlineIconProps> = memo(props => {
  return <TriangleOutlineSvg {...props} />;
});
