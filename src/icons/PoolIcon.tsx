import React, { FC, memo } from 'react';
import PoolSvg from '../svg/pool.svg';

export interface IPoolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PoolIcon: FC<IPoolIconProps> = memo(props => {
  return <PoolSvg {...props} />;
});
