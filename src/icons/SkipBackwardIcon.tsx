import React, { FC, memo } from 'react';
import SkipBackwardSvg from '../svg/skip-backward.svg';

export interface ISkipBackwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkipBackwardIcon: FC<ISkipBackwardIconProps> = memo(props => {
  return <SkipBackwardSvg {...props} />;
});
