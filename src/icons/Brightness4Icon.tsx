import React, { FC, memo } from 'react';
import Brightness4Svg from '../svg/brightness-4.svg';

export interface IBrightness4IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Brightness4Icon: FC<IBrightness4IconProps> = memo(props => {
  return <Brightness4Svg {...props} />;
});
