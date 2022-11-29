import React, { FC, memo } from 'react';
import Rewind5Svg from '../svg/rewind-5.svg';

export interface IRewind5IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Rewind5Icon: FC<IRewind5IconProps> = memo(props => {
  return <Rewind5Svg {...props} />;
});
