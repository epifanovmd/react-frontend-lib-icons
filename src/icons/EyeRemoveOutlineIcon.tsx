import React, { FC, memo } from 'react';
import EyeRemoveOutlineSvg from '../svg/eye-remove-outline.svg';

export interface IEyeRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeRemoveOutlineIcon: FC<IEyeRemoveOutlineIconProps> = memo(props => {
  return <EyeRemoveOutlineSvg {...props} />;
});
