import React, { FC, memo } from 'react';
import TableFurnitureSvg from '../svg/table-furniture.svg';

export interface ITableFurnitureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableFurnitureIcon: FC<ITableFurnitureIconProps> = memo(props => {
  return <TableFurnitureSvg {...props} />;
});
