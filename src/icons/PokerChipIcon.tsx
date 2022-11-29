import React, { FC, memo } from 'react';
import PokerChipSvg from '../svg/poker-chip.svg';

export interface IPokerChipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PokerChipIcon: FC<IPokerChipIconProps> = memo(props => {
  return <PokerChipSvg {...props} />;
});
