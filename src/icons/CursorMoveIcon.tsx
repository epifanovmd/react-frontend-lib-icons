import React, { FC, memo } from 'react';
import CursorMoveSvg from '../svg/cursor-move.svg';

export interface ICursorMoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CursorMoveIcon: FC<ICursorMoveIconProps> = memo(props => {
  return <CursorMoveSvg {...props} />;
});
