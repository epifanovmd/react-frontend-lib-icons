import React, { FC, memo } from 'react';
import AllergySvg from '../svg/allergy.svg';

export interface IAllergyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AllergyIcon: FC<IAllergyIconProps> = memo(props => {
  return <AllergySvg {...props} />;
});
