import React, { FC, memo } from 'react';
import FlashTriangleSvg from '../svg/flash-triangle.svg';

export interface IFlashTriangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashTriangleIcon: FC<IFlashTriangleIconProps> = memo(props => {
  return <FlashTriangleSvg {...props} />;
});
