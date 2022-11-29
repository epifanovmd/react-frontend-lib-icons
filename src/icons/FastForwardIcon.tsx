import React, { FC, memo } from 'react';
import FastForwardSvg from '../svg/fast-forward.svg';

export interface IFastForwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FastForwardIcon: FC<IFastForwardIconProps> = memo(props => {
  return <FastForwardSvg {...props} />;
});
