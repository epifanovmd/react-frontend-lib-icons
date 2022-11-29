import React, { FC, memo } from 'react';
import MagnifyRemoveCursorSvg from '../svg/magnify-remove-cursor.svg';

export interface IMagnifyRemoveCursorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyRemoveCursorIcon: FC<IMagnifyRemoveCursorIconProps> = memo(props => {
  return <MagnifyRemoveCursorSvg {...props} />;
});
