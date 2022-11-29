import React, { FC, memo } from 'react';
import ReorderVerticalSvg from '../svg/reorder-vertical.svg';

export interface IReorderVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReorderVerticalIcon: FC<IReorderVerticalIconProps> = memo(props => {
  return <ReorderVerticalSvg {...props} />;
});
