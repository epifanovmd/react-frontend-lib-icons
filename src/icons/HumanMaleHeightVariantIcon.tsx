import React, { FC, memo } from 'react';
import HumanMaleHeightVariantSvg from '../svg/human-male-height-variant.svg';

export interface IHumanMaleHeightVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleHeightVariantIcon: FC<IHumanMaleHeightVariantIconProps> = memo(props => {
  return <HumanMaleHeightVariantSvg {...props} />;
});
