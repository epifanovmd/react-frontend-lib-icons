import React, { FC, memo } from 'react';
import SkipForwardSvg from '../svg/skip-forward.svg';

export interface ISkipForwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipForwardIcon: FC<ISkipForwardIconProps> = memo(props => {
  return <SkipForwardSvg {...props} />;
});
