import React, { FC, memo } from 'react';
import PagePreviousOutlineSvg from '../svg/page-previous-outline.svg';

export interface IPagePreviousOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PagePreviousOutlineIcon: FC<IPagePreviousOutlineIconProps> = memo(props => {
  return <PagePreviousOutlineSvg {...props} />;
});
