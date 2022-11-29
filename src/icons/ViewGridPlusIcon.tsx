import React, { FC, memo } from 'react';
import ViewGridPlusSvg from '../svg/view-grid-plus.svg';

export interface IViewGridPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewGridPlusIcon: FC<IViewGridPlusIconProps> = memo(props => {
  return <ViewGridPlusSvg {...props} />;
});
