import React, { FC, memo } from 'react';
import HumanWalkerSvg from '../svg/human-walker.svg';

export interface IHumanWalkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanWalkerIcon: FC<IHumanWalkerIconProps> = memo(props => {
  return <HumanWalkerSvg {...props} />;
});
