import React, { FC, memo } from 'react';
import CursorPointerSvg from '../svg/cursor-pointer.svg';

export interface ICursorPointerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CursorPointerIcon: FC<ICursorPointerIconProps> = memo(props => {
  return <CursorPointerSvg {...props} />;
});
