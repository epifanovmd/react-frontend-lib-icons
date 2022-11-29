import React, { FC, memo } from 'react';
import CursorDefaultClickOutlineSvg from '../svg/cursor-default-click-outline.svg';

export interface ICursorDefaultClickOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CursorDefaultClickOutlineIcon: FC<ICursorDefaultClickOutlineIconProps> = memo(props => {
  return <CursorDefaultClickOutlineSvg {...props} />;
});
