import React, { FC, memo } from 'react';
import LeakSvg from '../svg/leak.svg';

export interface ILeakIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeakIcon: FC<ILeakIconProps> = memo(props => {
  return <LeakSvg {...props} />;
});
