import React, { FC, memo } from 'react';
import Rewind15Svg from '../svg/rewind-15.svg';

export interface IRewind15IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Rewind15Icon: FC<IRewind15IconProps> = memo(props => {
  return <Rewind15Svg {...props} />;
});
