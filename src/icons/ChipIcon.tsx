import React, { FC, memo } from 'react';
import ChipSvg from '../svg/chip.svg';

export interface IChipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChipIcon: FC<IChipIconProps> = memo(props => {
  return <ChipSvg {...props} />;
});
