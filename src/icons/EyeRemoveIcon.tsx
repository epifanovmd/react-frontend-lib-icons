import React, { FC, memo } from 'react';
import EyeRemoveSvg from '../svg/eye-remove.svg';

export interface IEyeRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeRemoveIcon: FC<IEyeRemoveIconProps> = memo(props => {
  return <EyeRemoveSvg {...props} />;
});
