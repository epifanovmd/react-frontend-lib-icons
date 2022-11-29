import React, { FC, memo } from 'react';
import MirrorRectangleSvg from '../svg/mirror-rectangle.svg';

export interface IMirrorRectangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MirrorRectangleIcon: FC<IMirrorRectangleIconProps> = memo(props => {
  return <MirrorRectangleSvg {...props} />;
});
