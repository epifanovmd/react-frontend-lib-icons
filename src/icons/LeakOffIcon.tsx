import React, { FC, memo } from 'react';
import LeakOffSvg from '../svg/leak-off.svg';

export interface ILeakOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeakOffIcon: FC<ILeakOffIconProps> = memo(props => {
  return <LeakOffSvg {...props} />;
});
