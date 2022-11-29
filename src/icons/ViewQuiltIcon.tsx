import React, { FC, memo } from 'react';
import ViewQuiltSvg from '../svg/view-quilt.svg';

export interface IViewQuiltIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewQuiltIcon: FC<IViewQuiltIconProps> = memo(props => {
  return <ViewQuiltSvg {...props} />;
});
