import React, { FC, memo } from 'react';
import CoachLampVariantSvg from '../svg/coach-lamp-variant.svg';

export interface ICoachLampVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoachLampVariantIcon: FC<ICoachLampVariantIconProps> = memo(props => {
  return <CoachLampVariantSvg {...props} />;
});
