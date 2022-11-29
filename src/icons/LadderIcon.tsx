import React, { FC, memo } from 'react';
import LadderSvg from '../svg/ladder.svg';

export interface ILadderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LadderIcon: FC<ILadderIconProps> = memo(props => {
  return <LadderSvg {...props} />;
});
