import React, { FC, memo } from 'react';
import FastForward10Svg from '../svg/fast-forward-10.svg';

export interface IFastForward10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FastForward10Icon: FC<IFastForward10IconProps> = memo(props => {
  return <FastForward10Svg {...props} />;
});
