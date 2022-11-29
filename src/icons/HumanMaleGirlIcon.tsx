import React, { FC, memo } from 'react';
import HumanMaleGirlSvg from '../svg/human-male-girl.svg';

export interface IHumanMaleGirlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleGirlIcon: FC<IHumanMaleGirlIconProps> = memo(props => {
  return <HumanMaleGirlSvg {...props} />;
});
