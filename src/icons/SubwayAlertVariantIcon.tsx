import React, { FC, memo } from 'react';
import SubwayAlertVariantSvg from '../svg/subway-alert-variant.svg';

export interface ISubwayAlertVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SubwayAlertVariantIcon: FC<ISubwayAlertVariantIconProps> = memo(props => {
  return <SubwayAlertVariantSvg {...props} />;
});
