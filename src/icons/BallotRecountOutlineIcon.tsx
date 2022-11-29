import React, { FC, memo } from 'react';
import BallotRecountOutlineSvg from '../svg/ballot-recount-outline.svg';

export interface IBallotRecountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BallotRecountOutlineIcon: FC<IBallotRecountOutlineIconProps> = memo(props => {
  return <BallotRecountOutlineSvg {...props} />;
});
