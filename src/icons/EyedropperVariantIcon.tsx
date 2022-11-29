import React, { FC, memo } from 'react';
import EyedropperVariantSvg from '../svg/eyedropper-variant.svg';

export interface IEyedropperVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyedropperVariantIcon: FC<IEyedropperVariantIconProps> = memo(props => {
  return <EyedropperVariantSvg {...props} />;
});
