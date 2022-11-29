import React, { FC, memo } from 'react';
import ViewListOutlineSvg from '../svg/view-list-outline.svg';

export interface IViewListOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewListOutlineIcon: FC<IViewListOutlineIconProps> = memo(props => {
  return <ViewListOutlineSvg {...props} />;
});
