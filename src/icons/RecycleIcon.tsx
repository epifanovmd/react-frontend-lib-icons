import React, { FC, memo } from 'react';
import RecycleSvg from '../svg/recycle.svg';

export interface IRecycleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RecycleIcon: FC<IRecycleIconProps> = memo(props => {
  return <RecycleSvg {...props} />;
});
