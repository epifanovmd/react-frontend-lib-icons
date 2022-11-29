import React, { FC, memo } from 'react';
import BackspaceOutlineSvg from '../svg/backspace-outline.svg';

export interface IBackspaceOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BackspaceOutlineIcon: FC<IBackspaceOutlineIconProps> = memo(props => {
  return <BackspaceOutlineSvg {...props} />;
});
