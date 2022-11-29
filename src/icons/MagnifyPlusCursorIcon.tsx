import React, { FC, memo } from 'react';
import MagnifyPlusCursorSvg from '../svg/magnify-plus-cursor.svg';

export interface IMagnifyPlusCursorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyPlusCursorIcon: FC<IMagnifyPlusCursorIconProps> = memo(props => {
  return <MagnifyPlusCursorSvg {...props} />;
});
