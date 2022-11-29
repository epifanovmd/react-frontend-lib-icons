import React, { FC, memo } from 'react';
import SurroundSound21Svg from '../svg/surround-sound-2-1.svg';

export interface ISurroundSound21IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SurroundSound21Icon: FC<ISurroundSound21IconProps> = memo(props => {
  return <SurroundSound21Svg {...props} />;
});
