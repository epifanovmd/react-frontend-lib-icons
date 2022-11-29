import React, { FC, memo } from 'react';
import ViewColumnSvg from '../svg/view-column.svg';

export interface IViewColumnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewColumnIcon: FC<IViewColumnIconProps> = memo(props => {
  return <ViewColumnSvg {...props} />;
});
