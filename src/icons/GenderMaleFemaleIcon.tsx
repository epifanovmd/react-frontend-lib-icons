import React, { FC, memo } from 'react';
import GenderMaleFemaleSvg from '../svg/gender-male-female.svg';

export interface IGenderMaleFemaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GenderMaleFemaleIcon: FC<IGenderMaleFemaleIconProps> = memo(props => {
  return <GenderMaleFemaleSvg {...props} />;
});
