import React, { FC, memo } from 'react';
import FastForward5Svg from '../svg/fast-forward-5.svg';

export interface IFastForward5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FastForward5Icon: FC<IFastForward5IconProps> = memo(props => {
  return <FastForward5Svg {...props} />;
});
