import React, { FC, memo } from 'react';
import PageNextOutlineSvg from '../svg/page-next-outline.svg';

export interface IPageNextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PageNextOutlineIcon: FC<IPageNextOutlineIconProps> = memo(props => {
  return <PageNextOutlineSvg {...props} />;
});
