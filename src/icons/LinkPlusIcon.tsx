import React, { FC, memo } from 'react';
import LinkPlusSvg from '../svg/link-plus.svg';

export interface ILinkPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkPlusIcon: FC<ILinkPlusIconProps> = memo(props => {
  return <LinkPlusSvg {...props} />;
});
