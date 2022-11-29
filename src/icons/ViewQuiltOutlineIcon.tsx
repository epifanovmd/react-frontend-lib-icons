import React, { FC, memo } from 'react';
import ViewQuiltOutlineSvg from '../svg/view-quilt-outline.svg';

export interface IViewQuiltOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewQuiltOutlineIcon: FC<IViewQuiltOutlineIconProps> = memo(props => {
  return <ViewQuiltOutlineSvg {...props} />;
});
