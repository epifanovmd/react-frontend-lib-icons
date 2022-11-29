import React, { FC, memo } from 'react';
import RectangleOutlineSvg from '../svg/rectangle-outline.svg';

export interface IRectangleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RectangleOutlineIcon: FC<IRectangleOutlineIconProps> = memo(props => {
  return <RectangleOutlineSvg {...props} />;
});
