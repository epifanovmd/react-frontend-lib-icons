import React, { FC, memo } from 'react';
import TableQuestionSvg from '../svg/table-question.svg';

export interface ITableQuestionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableQuestionIcon: FC<ITableQuestionIconProps> = memo(props => {
  return <TableQuestionSvg {...props} />;
});
