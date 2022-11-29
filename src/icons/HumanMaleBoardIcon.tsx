import React, { FC, memo } from 'react';
import HumanMaleBoardSvg from '../svg/human-male-board.svg';

export interface IHumanMaleBoardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleBoardIcon: FC<IHumanMaleBoardIconProps> = memo(props => {
  return <HumanMaleBoardSvg {...props} />;
});
