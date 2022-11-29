import React, { FC, memo } from 'react';
import HumanMaleChildSvg from '../svg/human-male-child.svg';

export interface IHumanMaleChildIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleChildIcon: FC<IHumanMaleChildIconProps> = memo(props => {
  return <HumanMaleChildSvg {...props} />;
});
