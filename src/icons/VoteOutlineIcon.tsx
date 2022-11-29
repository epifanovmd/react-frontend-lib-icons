import React, { FC, memo } from 'react';
import VoteOutlineSvg from '../svg/vote-outline.svg';

export interface IVoteOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VoteOutlineIcon: FC<IVoteOutlineIconProps> = memo(props => {
  return <VoteOutlineSvg {...props} />;
});
