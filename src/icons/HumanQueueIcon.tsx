import React, { FC, memo } from 'react';
import HumanQueueSvg from '../svg/human-queue.svg';

export interface IHumanQueueIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanQueueIcon: FC<IHumanQueueIconProps> = memo(props => {
  return <HumanQueueSvg {...props} />;
});
