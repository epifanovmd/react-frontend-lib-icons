import React, { FC, memo } from 'react';
import LinkBoxSvg from '../svg/link-box.svg';

export interface ILinkBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkBoxIcon: FC<ILinkBoxIconProps> = memo(props => {
  return <LinkBoxSvg {...props} />;
});
