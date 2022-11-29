import React, { FC, memo } from 'react';
import TypewriterSvg from '../svg/typewriter.svg';

export interface ITypewriterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TypewriterIcon: FC<ITypewriterIconProps> = memo(props => {
  return <TypewriterSvg {...props} />;
});
