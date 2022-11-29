import React, { FC, memo } from 'react';
import Brightness1Svg from '../svg/brightness-1.svg';

export interface IBrightness1IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Brightness1Icon: FC<IBrightness1IconProps> = memo(props => {
  return <Brightness1Svg {...props} />;
});
