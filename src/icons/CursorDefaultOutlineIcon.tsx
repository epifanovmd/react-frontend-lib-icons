import React, { FC, memo } from 'react';
import CursorDefaultOutlineSvg from '../svg/cursor-default-outline.svg';

export interface ICursorDefaultOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CursorDefaultOutlineIcon: FC<ICursorDefaultOutlineIconProps> = memo(props => {
  return <CursorDefaultOutlineSvg {...props} />;
});
