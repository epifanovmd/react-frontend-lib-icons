import React, { FC, memo } from 'react';
import CursorDefaultClickSvg from '../svg/cursor-default-click.svg';

export interface ICursorDefaultClickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CursorDefaultClickIcon: FC<ICursorDefaultClickIconProps> = memo(props => {
  return <CursorDefaultClickSvg {...props} />;
});
