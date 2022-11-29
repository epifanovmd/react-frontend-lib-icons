import React, { FC, memo } from 'react';
import HumanPregnantSvg from '../svg/human-pregnant.svg';

export interface IHumanPregnantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanPregnantIcon: FC<IHumanPregnantIconProps> = memo(props => {
  return <HumanPregnantSvg {...props} />;
});
