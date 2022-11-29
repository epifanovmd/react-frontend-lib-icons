import React, { FC, memo } from 'react';
import DumbbellSvg from '../svg/dumbbell.svg';

export interface IDumbbellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DumbbellIcon: FC<IDumbbellIconProps> = memo(props => {
  return <DumbbellSvg {...props} />;
});
