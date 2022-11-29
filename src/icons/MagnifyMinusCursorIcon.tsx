import React, { FC, memo } from 'react';
import MagnifyMinusCursorSvg from '../svg/magnify-minus-cursor.svg';

export interface IMagnifyMinusCursorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyMinusCursorIcon: FC<IMagnifyMinusCursorIconProps> = memo(props => {
  return <MagnifyMinusCursorSvg {...props} />;
});
