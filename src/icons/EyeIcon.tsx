import React, { FC, memo } from 'react';
import EyeSvg from '../svg/eye.svg';

export interface IEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeIcon: FC<IEyeIconProps> = memo(props => {
  return <EyeSvg {...props} />;
});
