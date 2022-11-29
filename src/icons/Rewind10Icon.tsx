import React, { FC, memo } from 'react';
import Rewind10Svg from '../svg/rewind-10.svg';

export interface IRewind10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Rewind10Icon: FC<IRewind10IconProps> = memo(props => {
  return <Rewind10Svg {...props} />;
});
