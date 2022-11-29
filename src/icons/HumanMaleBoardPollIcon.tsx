import React, { FC, memo } from 'react';
import HumanMaleBoardPollSvg from '../svg/human-male-board-poll.svg';

export interface IHumanMaleBoardPollIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleBoardPollIcon: FC<IHumanMaleBoardPollIconProps> = memo(props => {
  return <HumanMaleBoardPollSvg {...props} />;
});
