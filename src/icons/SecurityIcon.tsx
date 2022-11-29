import React, { FC, memo } from 'react';
import SecuritySvg from '../svg/security.svg';

export interface ISecurityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SecurityIcon: FC<ISecurityIconProps> = memo(props => {
  return <SecuritySvg {...props} />;
});
