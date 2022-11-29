import React, { FC, memo } from 'react';
import CursorDefaultSvg from '../svg/cursor-default.svg';

export interface ICursorDefaultIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CursorDefaultIcon: FC<ICursorDefaultIconProps> = memo(props => {
  return <CursorDefaultSvg {...props} />;
});
