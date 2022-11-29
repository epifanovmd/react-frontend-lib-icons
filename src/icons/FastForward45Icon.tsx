import React, { FC, memo } from 'react';
import FastForward45Svg from '../svg/fast-forward-45.svg';

export interface IFastForward45IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FastForward45Icon: FC<IFastForward45IconProps> = memo(props => {
  return <FastForward45Svg {...props} />;
});
