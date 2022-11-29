import React, { FC, memo } from 'react';
import ListStatusSvg from '../svg/list-status.svg';

export interface IListStatusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ListStatusIcon: FC<IListStatusIconProps> = memo(props => {
  return <ListStatusSvg {...props} />;
});
