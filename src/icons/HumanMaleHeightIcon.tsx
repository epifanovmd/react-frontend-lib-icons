import React, { FC, memo } from 'react';
import HumanMaleHeightSvg from '../svg/human-male-height.svg';

export interface IHumanMaleHeightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleHeightIcon: FC<IHumanMaleHeightIconProps> = memo(props => {
  return <HumanMaleHeightSvg {...props} />;
});
