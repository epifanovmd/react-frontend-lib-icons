import React, { FC, memo } from 'react';
import Brightness3Svg from '../svg/brightness-3.svg';

export interface IBrightness3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Brightness3Icon: FC<IBrightness3IconProps> = memo(props => {
  return <Brightness3Svg {...props} />;
});
