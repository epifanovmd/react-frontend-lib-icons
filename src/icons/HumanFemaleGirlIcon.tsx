import React, { FC, memo } from 'react';
import HumanFemaleGirlSvg from '../svg/human-female-girl.svg';

export interface IHumanFemaleGirlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanFemaleGirlIcon: FC<IHumanFemaleGirlIconProps> = memo(props => {
  return <HumanFemaleGirlSvg {...props} />;
});
