import React, { FC, memo } from 'react';
import FastForward15Svg from '../svg/fast-forward-15.svg';

export interface IFastForward15IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FastForward15Icon: FC<IFastForward15IconProps> = memo(props => {
  return <FastForward15Svg {...props} />;
});
