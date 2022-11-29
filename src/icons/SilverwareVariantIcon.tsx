import React, { FC, memo } from 'react';
import SilverwareVariantSvg from '../svg/silverware-variant.svg';

export interface ISilverwareVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SilverwareVariantIcon: FC<ISilverwareVariantIconProps> = memo(props => {
  return <SilverwareVariantSvg {...props} />;
});
