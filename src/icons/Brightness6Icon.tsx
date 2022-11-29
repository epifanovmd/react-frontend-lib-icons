import React, { FC, memo } from 'react';
import Brightness6Svg from '../svg/brightness-6.svg';

export interface IBrightness6IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Brightness6Icon: FC<IBrightness6IconProps> = memo(props => {
  return <Brightness6Svg {...props} />;
});
