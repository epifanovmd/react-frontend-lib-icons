import React, { FC, memo } from 'react';
import GenderMaleSvg from '../svg/gender-male.svg';

export interface IGenderMaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GenderMaleIcon: FC<IGenderMaleIconProps> = memo(props => {
  return <GenderMaleSvg {...props} />;
});
