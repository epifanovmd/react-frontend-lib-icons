import React, { FC, memo } from 'react';
import SurroundSound71Svg from '../svg/surround-sound-7-1.svg';

export interface ISurroundSound71IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SurroundSound71Icon: FC<ISurroundSound71IconProps> = memo(props => {
  return <SurroundSound71Svg {...props} />;
});
