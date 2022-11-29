import React, { FC, memo } from 'react';
import RectangleSvg from '../svg/rectangle.svg';

export interface IRectangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RectangleIcon: FC<IRectangleIconProps> = memo(props => {
  return <RectangleSvg {...props} />;
});
