import React, { FC, memo } from 'react';
import ViewGridPlusOutlineSvg from '../svg/view-grid-plus-outline.svg';

export interface IViewGridPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewGridPlusOutlineIcon: FC<IViewGridPlusOutlineIconProps> = memo(props => {
  return <ViewGridPlusOutlineSvg {...props} />;
});
