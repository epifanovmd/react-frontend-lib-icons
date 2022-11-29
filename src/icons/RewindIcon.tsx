import React, { FC, memo } from 'react';
import RewindSvg from '../svg/rewind.svg';

export interface IRewindIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RewindIcon: FC<IRewindIconProps> = memo(props => {
  return <RewindSvg {...props} />;
});
