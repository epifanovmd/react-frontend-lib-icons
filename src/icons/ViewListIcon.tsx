import React, { FC, memo } from 'react';
import ViewListSvg from '../svg/view-list.svg';

export interface IViewListIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewListIcon: FC<IViewListIconProps> = memo(props => {
  return <ViewListSvg {...props} />;
});
