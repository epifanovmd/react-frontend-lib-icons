import React, { FC, memo } from 'react';
import Brightness5Svg from '../svg/brightness-5.svg';

export interface IBrightness5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Brightness5Icon: FC<IBrightness5IconProps> = memo(props => {
  return <Brightness5Svg {...props} />;
});
