import React, { FC, memo } from 'react';
import LinkOffSvg from '../svg/link-off.svg';

export interface ILinkOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkOffIcon: FC<ILinkOffIconProps> = memo(props => {
  return <LinkOffSvg {...props} />;
});
