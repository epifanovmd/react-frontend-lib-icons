import React, { FC, memo } from 'react';
import CursorTextSvg from '../svg/cursor-text.svg';

export interface ICursorTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CursorTextIcon: FC<ICursorTextIconProps> = memo(props => {
  return <CursorTextSvg {...props} />;
});
