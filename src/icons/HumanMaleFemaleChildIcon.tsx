import React, { FC, memo } from 'react';
import HumanMaleFemaleChildSvg from '../svg/human-male-female-child.svg';

export interface IHumanMaleFemaleChildIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleFemaleChildIcon: FC<IHumanMaleFemaleChildIconProps> = memo(props => {
  return <HumanMaleFemaleChildSvg {...props} />;
});
