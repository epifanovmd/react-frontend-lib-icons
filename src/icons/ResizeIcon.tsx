import React, { FC, memo } from 'react';
import ResizeSvg from '../svg/resize.svg';

export interface IResizeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ResizeIcon: FC<IResizeIconProps> = memo(props => {
  return <ResizeSvg {...props} />;
});
