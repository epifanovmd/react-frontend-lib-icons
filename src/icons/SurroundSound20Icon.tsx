import React, { FC, memo } from 'react';
import SurroundSound20Svg from '../svg/surround-sound-2-0.svg';

export interface ISurroundSound20IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SurroundSound20Icon: FC<ISurroundSound20IconProps> = memo(props => {
  return <SurroundSound20Svg {...props} />;
});
