import React, { FC, memo } from 'react';
import LinkBoxOutlineSvg from '../svg/link-box-outline.svg';

export interface ILinkBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LinkBoxOutlineIcon: FC<ILinkBoxOutlineIconProps> = memo(props => {
  return <LinkBoxOutlineSvg {...props} />;
});
