import React, { FC, memo } from 'react';
import Brightness7Svg from '../svg/brightness-7.svg';

export interface IBrightness7IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Brightness7Icon: FC<IBrightness7IconProps> = memo(props => {
  return <Brightness7Svg {...props} />;
});
