import React, { FC, memo } from 'react';
import SurroundSound31Svg from '../svg/surround-sound-3-1.svg';

export interface ISurroundSound31IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SurroundSound31Icon: FC<ISurroundSound31IconProps> = memo(props => {
  return <SurroundSound31Svg {...props} />;
});
