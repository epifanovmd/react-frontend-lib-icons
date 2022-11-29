import React, { FC, memo } from 'react';
import HumanChildSvg from '../svg/human-child.svg';

export interface IHumanChildIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanChildIcon: FC<IHumanChildIconProps> = memo(props => {
  return <HumanChildSvg {...props} />;
});
