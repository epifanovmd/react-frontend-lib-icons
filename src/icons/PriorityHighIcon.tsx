import React, { FC, memo } from 'react';
import PriorityHighSvg from '../svg/priority-high.svg';

export interface IPriorityHighIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PriorityHighIcon: FC<IPriorityHighIconProps> = memo(props => {
  return <PriorityHighSvg {...props} />;
});
