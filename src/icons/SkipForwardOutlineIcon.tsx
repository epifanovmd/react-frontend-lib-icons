import React, { FC, memo } from 'react';
import SkipForwardOutlineSvg from '../svg/skip-forward-outline.svg';

export interface ISkipForwardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipForwardOutlineIcon: FC<ISkipForwardOutlineIconProps> = memo(props => {
  return <SkipForwardOutlineSvg {...props} />;
});
