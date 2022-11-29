import React, { FC, memo } from 'react';
import HumanCaneSvg from '../svg/human-cane.svg';

export interface IHumanCaneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanCaneIcon: FC<IHumanCaneIconProps> = memo(props => {
  return <HumanCaneSvg {...props} />;
});
