import React, { FC, memo } from 'react';
import FastForward30Svg from '../svg/fast-forward-30.svg';

export interface IFastForward30IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FastForward30Icon: FC<IFastForward30IconProps> = memo(props => {
  return <FastForward30Svg {...props} />;
});
