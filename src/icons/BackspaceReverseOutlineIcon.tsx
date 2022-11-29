import React, { FC, memo } from 'react';
import BackspaceReverseOutlineSvg from '../svg/backspace-reverse-outline.svg';

export interface IBackspaceReverseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BackspaceReverseOutlineIcon: FC<IBackspaceReverseOutlineIconProps> = memo(props => {
  return <BackspaceReverseOutlineSvg {...props} />;
});
