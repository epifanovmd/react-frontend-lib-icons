import React, { FC, memo } from 'react';
import HardHatSvg from '../svg/hard-hat.svg';

export interface IHardHatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HardHatIcon: FC<IHardHatIconProps> = memo(props => {
  return <HardHatSvg {...props} />;
});
