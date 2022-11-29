import React, { FC, memo } from 'react';
import Brightness2Svg from '../svg/brightness-2.svg';

export interface IBrightness2IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Brightness2Icon: FC<IBrightness2IconProps> = memo(props => {
  return <Brightness2Svg {...props} />;
});
