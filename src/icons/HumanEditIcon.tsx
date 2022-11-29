import React, { FC, memo } from 'react';
import HumanEditSvg from '../svg/human-edit.svg';

export interface IHumanEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanEditIcon: FC<IHumanEditIconProps> = memo(props => {
  return <HumanEditSvg {...props} />;
});
