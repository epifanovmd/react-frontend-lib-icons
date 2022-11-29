import React, { FC, memo } from 'react';
import BallotOutlineSvg from '../svg/ballot-outline.svg';

export interface IBallotOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BallotOutlineIcon: FC<IBallotOutlineIconProps> = memo(props => {
  return <BallotOutlineSvg {...props} />;
});
