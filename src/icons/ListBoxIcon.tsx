import React, { FC, memo } from 'react';
import ListBoxSvg from '../svg/list-box.svg';

export interface IListBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ListBoxIcon: FC<IListBoxIconProps> = memo(props => {
  return <ListBoxSvg {...props} />;
});
