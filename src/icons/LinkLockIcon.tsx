import React, { FC, memo } from 'react';
import LinkLockSvg from '../svg/link-lock.svg';

export interface ILinkLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkLockIcon: FC<ILinkLockIconProps> = memo(props => {
  return <LinkLockSvg {...props} />;
});
