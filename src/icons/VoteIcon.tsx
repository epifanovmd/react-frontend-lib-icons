import React, { FC, memo } from 'react';
import VoteSvg from '../svg/vote.svg';

export interface IVoteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VoteIcon: FC<IVoteIconProps> = memo(props => {
  return <VoteSvg {...props} />;
});
