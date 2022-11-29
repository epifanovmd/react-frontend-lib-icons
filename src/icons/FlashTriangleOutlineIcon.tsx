import React, { FC, memo } from 'react';
import FlashTriangleOutlineSvg from '../svg/flash-triangle-outline.svg';

export interface IFlashTriangleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlashTriangleOutlineIcon: FC<IFlashTriangleOutlineIconProps> = memo(props => {
  return <FlashTriangleOutlineSvg {...props} />;
});
