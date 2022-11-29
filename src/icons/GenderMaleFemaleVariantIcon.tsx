import React, { FC, memo } from 'react';
import GenderMaleFemaleVariantSvg from '../svg/gender-male-female-variant.svg';

export interface IGenderMaleFemaleVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GenderMaleFemaleVariantIcon: FC<IGenderMaleFemaleVariantIconProps> = memo(props => {
  return <GenderMaleFemaleVariantSvg {...props} />;
});
