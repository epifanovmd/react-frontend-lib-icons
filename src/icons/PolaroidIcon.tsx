import React, { FC, memo } from 'react';
import PolaroidSvg from '../svg/polaroid.svg';

export interface IPolaroidIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PolaroidIcon: FC<IPolaroidIconProps> = memo(props => {
  return <PolaroidSvg {...props} />;
});
