import React, { FC, memo } from 'react';
import Rewind30Svg from '../svg/rewind-30.svg';

export interface IRewind30IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Rewind30Icon: FC<IRewind30IconProps> = memo(props => {
  return <Rewind30Svg {...props} />;
});
