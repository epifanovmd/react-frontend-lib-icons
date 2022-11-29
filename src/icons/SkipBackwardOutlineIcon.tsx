import React, { FC, memo } from 'react';
import SkipBackwardOutlineSvg from '../svg/skip-backward-outline.svg';

export interface ISkipBackwardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipBackwardOutlineIcon: FC<ISkipBackwardOutlineIconProps> = memo(props => {
  return <SkipBackwardOutlineSvg {...props} />;
});
