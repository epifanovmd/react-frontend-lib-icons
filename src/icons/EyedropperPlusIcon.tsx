import React, { FC, memo } from 'react';
import EyedropperPlusSvg from '../svg/eyedropper-plus.svg';

export interface IEyedropperPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyedropperPlusIcon: FC<IEyedropperPlusIconProps> = memo(props => {
  return <EyedropperPlusSvg {...props} />;
});
