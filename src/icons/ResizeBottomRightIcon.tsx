import React, { FC, memo } from 'react';
import ResizeBottomRightSvg from '../svg/resize-bottom-right.svg';

export interface IResizeBottomRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ResizeBottomRightIcon: FC<IResizeBottomRightIconProps> = memo(props => {
  return <ResizeBottomRightSvg {...props} />;
});
