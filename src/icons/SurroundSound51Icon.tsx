import React, { FC, memo } from 'react';
import SurroundSound51Svg from '../svg/surround-sound-5-1.svg';

export interface ISurroundSound51IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SurroundSound51Icon: FC<ISurroundSound51IconProps> = memo(props => {
  return <SurroundSound51Svg {...props} />;
});
