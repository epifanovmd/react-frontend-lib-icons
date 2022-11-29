import React, { FC, memo } from 'react';
import Rewind45Svg from '../svg/rewind-45.svg';

export interface IRewind45IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Rewind45Icon: FC<IRewind45IconProps> = memo(props => {
  return <Rewind45Svg {...props} />;
});
