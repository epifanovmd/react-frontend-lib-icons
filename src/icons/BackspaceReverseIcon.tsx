import React, { FC, memo } from 'react';
import BackspaceReverseSvg from '../svg/backspace-reverse.svg';

export interface IBackspaceReverseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BackspaceReverseIcon: FC<IBackspaceReverseIconProps> = memo(props => {
  return <BackspaceReverseSvg {...props} />;
});
