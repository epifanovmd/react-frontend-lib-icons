import React, { FC, memo } from 'react';
import LinkSvg from '../svg/link.svg';

export interface ILinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkIcon: FC<ILinkIconProps> = memo(props => {
  return <LinkSvg {...props} />;
});
