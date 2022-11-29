import React, { FC, memo } from 'react';
import TableOfContentsSvg from '../svg/table-of-contents.svg';

export interface ITableOfContentsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableOfContentsIcon: FC<ITableOfContentsIconProps> = memo(props => {
  return <TableOfContentsSvg {...props} />;
});
