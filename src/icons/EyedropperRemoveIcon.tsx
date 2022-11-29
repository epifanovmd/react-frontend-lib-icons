import React, { FC, memo } from 'react';
import EyedropperRemoveSvg from '../svg/eyedropper-remove.svg';

export interface IEyedropperRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyedropperRemoveIcon: FC<IEyedropperRemoveIconProps> = memo(props => {
  return <EyedropperRemoveSvg {...props} />;
});
