import React, { FC, memo } from 'react';
import SurroundSound512Svg from '../svg/surround-sound-5-1-2.svg';

export interface ISurroundSound512IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SurroundSound512Icon: FC<ISurroundSound512IconProps> = memo(props => {
  return <SurroundSound512Svg {...props} />;
});
