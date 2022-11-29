import React, { FC, memo } from 'react';
import Rewind60Svg from '../svg/rewind-60.svg';

export interface IRewind60IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Rewind60Icon: FC<IRewind60IconProps> = memo(props => {
  return <Rewind60Svg {...props} />;
});
