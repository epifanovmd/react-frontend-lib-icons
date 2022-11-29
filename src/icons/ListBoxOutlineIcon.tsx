import React, { FC, memo } from 'react';
import ListBoxOutlineSvg from '../svg/list-box-outline.svg';

export interface IListBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ListBoxOutlineIcon: FC<IListBoxOutlineIconProps> = memo(props => {
  return <ListBoxOutlineSvg {...props} />;
});
