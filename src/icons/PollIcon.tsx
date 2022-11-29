import React, { FC, memo } from 'react';
import PollSvg from '../svg/poll.svg';

export interface IPollIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PollIcon: FC<IPollIconProps> = memo(props => {
  return <PollSvg {...props} />;
});
