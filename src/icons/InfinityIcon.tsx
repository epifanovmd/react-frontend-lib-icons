import React, { FC, memo } from 'react';
import InfinitySvg from '../svg/infinity.svg';

export interface IInfinityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InfinityIcon: FC<IInfinityIconProps> = memo(props => {
  return <InfinitySvg {...props} />;
});
