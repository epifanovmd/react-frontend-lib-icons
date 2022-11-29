import React, { FC, memo } from 'react';
import GenderFemaleSvg from '../svg/gender-female.svg';

export interface IGenderFemaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GenderFemaleIcon: FC<IGenderFemaleIconProps> = memo(props => {
  return <GenderFemaleSvg {...props} />;
});
