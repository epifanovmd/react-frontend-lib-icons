import React, { FC, memo } from 'react';
import FastForward60Svg from '../svg/fast-forward-60.svg';

export interface IFastForward60IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FastForward60Icon: FC<IFastForward60IconProps> = memo(props => {
  return <FastForward60Svg {...props} />;
});
