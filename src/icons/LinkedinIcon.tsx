import React, { FC, memo } from 'react';
import LinkedinSvg from '../svg/linkedin.svg';

export interface ILinkedinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkedinIcon: FC<ILinkedinIconProps> = memo(props => {
  return <LinkedinSvg {...props} />;
});
